const navcontainer = document.querySelector('header');
let textexample = document.createElement('div');
searchbar.addEventListener('keyup', function () {
    let textSearching = event.target.value;
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${textSearching}&limit=10`) 
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            let textCoincidences = myJson.data;
            console.log(textCoincidences);
            let i = 0; //Iterator; We only should display the fist 3 matches;
            textexample.innerHTML = ''; //Refresh the result in each search;
            textCoincidences.forEach(element => {
                let regex = new RegExp(`${textSearching.toLowerCase()}`);
                if (regex.test(element.title.toLowerCase()) && i < 3) {
                    textexample.innerHTML += `<p>${element.title}</p>`;
                    i++;
                }
            });
            navcontainer.appendChild(textexample);
            return myJson.data;
        })
        .catch((error) => {
            return error;
        })
});
