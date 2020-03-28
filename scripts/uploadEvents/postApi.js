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
            gifLocalStore(res.data.id)
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

function gifLocalStore(newGif) {
    
    if (localStorage.getItem('mygifs') === null) {
        localStorage.setItem('mygifs', newGif);
    } else {
        let currentGifs = localStorage.getItem('mygifs')
        currentGifs += `,${newGif}`
        localStorage.setItem('mygifs', currentGifs);
    }
}
  
class LoadAnimation{
    constructor(status) {
        this.status = status;
    }
    start() {
        console.log('entrando a la clase');
        let loader = document.querySelectorAll('.barSection')
        let i = 0;
        let interval = setInterval(() => {
            if (i === 27 && this.status === 'false') {   
                console.log('subida exitosa');
                renderPreview();
                clearInterval(interval);
                return true;
            } else if(i === 27) {
                loader.forEach(zone => {
                    zone.style.background = "#999999"
                })
                i = 0;
            } else {
                loader[i].style.background = "#F7C9F3";
                i += 1;
            }
        },300);   
    }
}

function renderLoadContainer() {
    // Hide and remove unnecessary elements
    let uploadBtn = document.getElementById('upload');
    captionContainer.innerHTML = '';
    timerContainer.style.display = 'none';
    uploadBtn.style.display = 'none';
    captionButton.innerText = 'Cancelar';
    
    captionContainer.setAttribute('id', 'wait-load')
    let worldImg = document.createElement('img');
    worldImg.src = '<img src="../../images/globe_img.png'
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


function renderPreview() {
    console.log(`gif subido: https://giphy.com/gifs/${localStorage.getItem('upload')}`);
}