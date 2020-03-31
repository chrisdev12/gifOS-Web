const mygifsBtn = document.getElementById('myGuifos')
let myGifsContainer;

mygifsBtn.addEventListener('click',showMyGuifos)


/**
 * To avoid make multiple API request: User only could do one request (if he doesnt reload the page)
 * This firsttime he could retrieve all his gifs sotred on local store
 * and the function only going to hide or show that container if user click again 
 * my Guifos option
 */

function showMyGuifos() {
    let body = document.getElementsByTagName('body')[0]
    //CSS has predefined that if the body came to have this class:
    //Main and trend container would be display:none;
    body.classList.toggle('mygifos');

    if (event.target.value === '0') {
        let subtitle = document.createElement('h4');
        myGifsContainer = document.createElement('div');
        myGifsContainer.classList.add('mygifs-container');
        body.appendChild(myGifsContainer);
        subtitle.classList.add('subtitle');
        subtitle.innerText = 'Mis guifos'
        myGifsContainer.appendChild(subtitle);
        myGifsById(localStorage.getItem('mygifs'))
        event.target.value = '1'
        console.log(event.target.value)
    }
}