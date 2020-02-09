const apikey = 'FomuiY9mN225fs0Hy6WPQTYPrumdf6R8';
const searchbar = document.querySelector('#searchbar');
const searchButton = document.querySelector('nav button');
const trendSectionGifts = document.querySelectorAll('#trends img');
const mainSectionGifts = document.querySelectorAll('#suggestions img');
const stylelink = document.querySelector('head link');

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

    let randomArray = [];
    
    searchGifts(null, 'trending', 14)
        .then((content) => {
            console.log(content);
            content.forEach(element => {
                randomArray.push(element.images.original);          
            });
            
            let x = 0; //Iterator for trendSectionGifts that are in another section and
            //begin from 0
        
            for (let i = 0; i < randomArray.length; i++){
                
                if (i < 4) {
                    mainSectionGifts[i].setAttribute('src', `${randomArray[i].url}`)
                } else {
                    trendSectionGifts[x].setAttribute('src', `${randomArray[i].url}`)
                    x++
                }
            };
        })
        .catch((error) => {
            return error;
        })
}
