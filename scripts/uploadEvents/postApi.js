/*https://muffinman.io/uploading-files-using-fetch-multipart-form-data/ 
Must be viewed to comprenhense why 'content-Type': 'multipart/form-data' must be not
included */

async function postEndpoint(gif) {
    try {
        const params = {
            method: 'POST',
            body: gif
        };
        const animation = new LoadAnimation('true');
        renderLoadContainer();
        animation.start();
        let req = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${apikey}`,params)
        let res = await req.json()
        if (res.meta.status === 200) {
            //Set the Animation.status = false stop the upload bar animation.
            animation.status = 'false';
            animation.gifId = res.data.id;
        } else {
            alert('Error al subir tu GifOs, vuelve a intentarlo por favor')
            window.location = "upload.html";
        }
        
    } catch (error) {
        alert('Error al subir tu GifOs, vuelve a intentarlo por favor')
        window.location = "upload.html";
        throw new Error(`Error en el post: ${error}`)
    }
}

/*
* To reach a "sync" animation, that only end when the bar reach his last "piece" and 
* the gif be succesfully posted , when the promise be resolved (200), the status will 
*be changed to false: The necessary condition to finish the setInterval,and the gif id 
* stored in the class porperty gifid (to pass ir to localStorage and build  the final preview container.
*/

class LoadAnimation{
    constructor(status,gifId) {
        this.status = status;
        this.gifId = gifId
    }
    start() {
        let loader = document.querySelectorAll('.barSection')
        let i = 0;
        let interval = setInterval(() => {
            if (i === 27 && this.status === 'false') {   
                clearInterval(interval); //Stop Interval
                gifLocalStore(this.gifId); //Store the newGif in localStorage
                renderPreviewContainer(this.gifId); //Display the final preview container (preview.js)
            } else if(i === 27) {
                loader.forEach(zone => {
                    zone.style.background = "#999999"
                })
                i = 0;
            } else {
                loader[i].style.background = "#F7C9F3";
                i += 1;
            }
        },250);   
    }
}

/*
* Validate if the localStorage doesnt exist: CreateOne.
* If laready exist one, concatenate the new id gyd to the another ones.
*/
function gifLocalStore(newGif) {
    if (localStorage.getItem('mygifs') === null) {
        localStorage.setItem('mygifs', newGif);
    } else {
        let currentGifs = localStorage.getItem('mygifs')
        currentGifs += `,${newGif}`
        localStorage.setItem('mygifs', currentGifs);
    }
}

function renderLoadContainer() {
    // Hide and remove unnecessary elements
    let uploadBtn = document.getElementsByClassName('caption')[1];
    uploadBtn.style.display = 'none';
    stageInfo.innerText = "Subiendo Guifo";
    captionContainer.setAttribute('id', 'wait-load') //Wait-load had predifines styles
    captionContainer.innerHTML = '';
    timerContainer.style.display = 'none';
    captionButton.innerText = 'Cancelar';
    
    
    let worldImg = document.createElement('img');
    worldImg.src = '../../images/globe_img.png'
    worldImg.alt = 'World icon that is showed while the gif is being uploaded'
    captionContainer.appendChild(worldImg);
    
    let textLoad = document.createElement('p');
    textLoad.innerText = 'Estamos subiendo tu guifo…'
    captionContainer.appendChild(textLoad);
    
    let barContainer = document.createElement('div');
    barContainer.setAttribute('id','loading-bar')
    let barSections = document.createElement('span');
    barSections.classList.add('barSection')
    //Create 27 spans: Each zone that going to be colored in the loadbar
    for (let i = 0; i < 27; i++){
        barContainer.appendChild(barSections.cloneNode(true))
    }
    captionContainer.appendChild(barContainer)
    
    let secText = textLoad.cloneNode(true);
    secText.innerHTML = 'Tiempo restante: <del>38 años</del> algunos minutos'
    captionContainer.appendChild(secText)
}