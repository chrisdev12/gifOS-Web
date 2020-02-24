const navcontainer = document.querySelector('header');
let searchCoincidencesContainer = document.createElement('div');

//Add the style that will define the style of our container
searchCoincidencesContainer.setAttribute('class', 'coincidences');

//Event to get new coincideces once time a new key being pressed
searchbar.addEventListener('keyup', function () {
    let textSearching = event.target.value;
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${textSearching}&limit=10`) 
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            let i = 0; //Iterator; We only should display the fist 3 matches;
            searchCoincidencesContainer.innerHTML = ''; //Refresh the result in each search;
            myJson.data.forEach(element => {
                let regex = new RegExp(`${textSearching.toLowerCase()}`);
                if (regex.test(element.title.toLowerCase()) && i < 3) {
                    searchCoincidencesContainer.innerHTML += `<p>${element.title}</p>`;
                    i++;
                }
            });
            navcontainer.appendChild(searchCoincidencesContainer);
            addingCoincidence();
            monitorCoincidenceContainer();
            return myJson.data;
        })
        .catch((error) => {
            return error;
        })
});


//Add desired coincidence to searchbar content

function addingCoincidence(){
    const coincidence = document.querySelectorAll('.coincidences p');
    coincidence.forEach(element =>
        element.addEventListener('click', function () {
            console.log(event.target.innerText);
            searchbar.value = event.target.innerText;
        })
    );
}

//Monitor the coincidence container to avoid that will be showed empty

function monitorCoincidenceContainer() {
    if (searchbar.value.length === 0) {
        searchCoincidencesContainer.style.display = 'none';
    } else {
        searchCoincidencesContainer.style.display = 'block';
    }
}