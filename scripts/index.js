const apikey = 'FomuiY9mN225fs0Hy6WPQTYPrumdf6R8';
const searchbar = document.getElementById('searchbar');
const searchButton = document.getElementById('searchBtn');
const trendSectionGifts = document.getElementsByClassName('trend-img');
const mainSectionGifts = document.getElementsByClassName('suggest-gifts');
const stylelink = document.getElementsByTagName('link')[0];
const titleSuggestGifts = document.getElementsByClassName('suggestion-text');
const titleTrendGifts = document.getElementsByClassName('trend-text')
const mainButtons = document.querySelectorAll('main button');

//General API request: Working with search and random endpoints.
//NOTE: The gifts URL are on the JSON > data > images > original > url

async function searchGifts(search,endpoint,limit) {
    try {
        let req = fetch(`http://api.giphy.com/v1/gifs/${endpoint}?api_key=${apikey}&q=${search}&limit=${limit}`) 
        let res = await req
        let myJson = await res.json()       
        return myJson.data;  
    } catch (err) {
        throw new Error(err)
    }
}

searchButton.addEventListener('click', () => {
    searchMoreGifos(searchbar.value)
});

//------------Main buttons search---------------
mainButtons.forEach(element => {
    element.addEventListener('click', () => {
        searchMoreGifos(event.target.value)
    });
});

//First APi request:  populate the home with random gifos.

displayRandomGifos();

async function displayRandomGifos() {
    try {
        let randomGifos = []; //List of objects that contains the URL and title of each random gift
    
        let res = await searchGifts(null, 'trending', 14)   
        res.forEach(element => {
            let giftText = element.title.split(' ').slice(0,4); //Get max 4 words
            let hashtags = '';
            giftText.forEach(element =>{ 
                hashtags += `#${element} `;
            })
            
            let gifo = new Object(); //Create an object to organize the URL, title and text to shon on containers.
            gifo.url = element.images.original.url;
            gifo.text = `${hashtags}` || '#Not #Gift #Title #Available';
            gifo.value = element.title;
            randomGifos.push(gifo);         
        });
                
        let x = 0; //Iterator for gifos of trendSectionGifts that are in another section/container  
        for (let i = 0; i < randomGifos.length; i++){
            
            if (i < 4) {
                mainSectionGifts[i].setAttribute('src', `${randomGifos[i].url}`);
                mainButtons[i].setAttribute('value', `${randomGifos[i].value}`);
                titleSuggestGifts[i].textContent = `${randomGifos[i].text}`;
            } else {
                trendSectionGifts[x].setAttribute('src', `${randomGifos[i].url}`);
                titleTrendGifts[x].textContent = `${randomGifos[i].text}`;
                x++
            }
        };
        
    } catch (err) {
        throw new Error(err)
    }
}

async function searchMoreGifos(event) {
    try {
        let trendArray = [];
        let trendTextArray = [];
        let gifs = await searchGifts(event, 'search', 10)
        gifs.forEach(element => {
            trendArray.push(element.images.original);
            trendTextArray.push(element.title);
        });
    
        for (let i = 0; i < trendArray.length; i++) {
            trendSectionGifts[i].setAttribute('src', `${trendArray[i].url}`)
            titleTrendGifts[i].textContent = `${trendTextArray[i]}`;
        };
    
        window.location.href = "#trends";
    } catch (err) {
        throw new Error(err)
    }  
}