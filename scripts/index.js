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
    
    let a = fetch(`http://api.giphy.com/v1/gifs/${endpoint}?api_key=${apikey}&q=${search}&limit=${limit}`) 
        .then((response) => {
            return response.json();
            })
            .then((myJson) => {
                return myJson.data;
            })
            .catch((error) => {
                return error;
            })
    
    return a;
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

displayRandomGifts();

function displayRandomGifts() {

    let randomGifts = []; //List of objects that contains the URL and title of each random gift
    
    searchGifts(null, 'trending', 14)
        .then((content) => {
            console.log(content); 
            content.forEach(element => {
                let giftText = element.title.split(' ').slice(0,4); //Get max 4 words
                let hashtags = '';
                giftText.forEach(element =>{ 
                    hashtags += `#${element} `;
                })
                
                let gift = new Object(); //Create an object to organize the URL, title and text to shon on containers.
                gift.url = element.images.original.url;
                gift.text = `${hashtags}` || '#Not #Gift #Title #Available';
                gift.value = element.title;
                randomGifts.push(gift);         
            });
            console.log(randomGifts)
            let x = 0; //Iterator for trendSectionGifts that are in another section and
            //begin from 0
        
            for (let i = 0; i < randomGifts.length; i++){
                
                if (i < 4) {
                    mainSectionGifts[i].setAttribute('src', `${randomGifts[i].url}`);
                    mainButtons[i].setAttribute('value', `${randomGifts[i].value}`);
                    titleSuggestGifts[i].textContent = `${randomGifts[i].text}`;
                } else {
                    trendSectionGifts[x].setAttribute('src', `${randomGifts[i].url}`);
                    titleTrendGifts[x].textContent = `${randomGifts[i].text}`;
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