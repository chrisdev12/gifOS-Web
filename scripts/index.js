const apikey = 'FomuiY9mN225fs0Hy6WPQTYPrumdf6R8';
const searchbar = document.querySelector('#searchbar');
const searchButton = document.querySelector('nav button');
const trendSectionGifts = document.querySelectorAll('#trends img');
const mainSectionGifts = document.querySelectorAll('.suggest-gifts');
const stylelink = document.querySelector('head link');
const titleSuggestGifts = document.querySelectorAll('.suggestion-container p');
const titleTrendGifts = document.querySelectorAll('.trend-container p')
const mainButtons = document.querySelectorAll('main button');

//General API request: Working with search and random endpoints.
//NOTE: The gifts URL are on the JSON > images > original > url

function searchGifts(search,endpoint,limit) {
    
    let req = fetch(`http://api.giphy.com/v1/gifs/${endpoint}?api_key=${apikey}&q=${search}&limit=${limit}`) 
        .then((response) => {
            return response.json();
            })
            .then((myJson) => {
                return myJson.data;
            })
            .catch((error) => {
                return error;
            })
    
    return req;
}


searchButton.addEventListener('click', function () {
    let trendArray = [];
    searchGifts(searchbar.value,'search',10)
        .then((content) => {
            content.forEach(element => {
                trendArray.push(element.images.original);          
            });
        
            for (let i = 0; i < trendArray.length; i++){
                trendSectionGifts[i].setAttribute('src', `${trendArray[i].url}`)
            };
            
            window.location.href = "#trends";
        })
        .catch((error) => {
            return error;
        })
});

//First APi request, do the first populate of gifsts that are visible for 
//first time in the page

displayRandomGifos();

function displayRandomGifos() {

    let randomGifos = []; //List of objects that contains the URL and title of each random gift
    
    searchGifts(null, 'trending', 14)
        .then((content) => {
            content.forEach(element => {
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
        })
        .catch((error) => {
            return error;
        })
}

//------------Main buttons search---------------

mainButtons.forEach(element => {
    element.addEventListener('click', function () {
        let trendArray = [];
        searchGifts(event.target.value, 'search', 10)
            .then((content) => {
                content.forEach(element => {
                    trendArray.push(element.images.original);
                });
        
                for (let i = 0; i < trendArray.length; i++) {
                    trendSectionGifts[i].setAttribute('src', `${trendArray[i].url}`)
                };
            
                window.location.href = "#trends";
            })
            .catch((error) => {
                return error;
            })
    });
})