const apikey = 'FomuiY9mN225fs0Hy6WPQTYPrumdf6R8';
const searchbar = document.querySelector('#searchbar');
const searchButton = document.querySelector('nav button');
const mainSection = document.querySelector('main');



searchButton.addEventListener('click', function () {
    
    let newDisplay = '';
    searchGift(searchbar.value)
        .then((content) => {
            content.forEach(element => {
                newDisplay += `<img src="${element.images.original.url}" class="gift"></img>`           
            });
            
            mainSection.innerHTML = newDisplay;
        });
});

//The gifts URL are on the JSON gif > images > url

//request via search endpoint.
function searchGift(search) {
    search.toLowerCase();
    
    let a = fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${search}`) 
        .then((response) => {
            return response.json();
            })
            .then((myJson) => {
                result = myJson.data;
                return myJson.data;
            })
            .catch((error) => {
                return error;
            })
    
    return a;
}