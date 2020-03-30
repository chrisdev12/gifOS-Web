function renderPreviewContainer(gifId) {
     
    myGifsById(gifId)
        .then(res => {
            captionContainer.innerHTML = '';
            let title = document.createElement('p');
            let copyBtn = document.getElementsByClassName('caption')[1];
            let readyBtn = captionButton.cloneNode(true);
            copyBtn.style.display = 'block';
            gif.src = res[0].images.original.url
            gif.alt = 'Gif uploaded'
            captionContainer.appendChild(gif)
            
            copyBtn.value = gif.value = res[0].images.original.url
            copyBtn.innerText = 'Copiar Enlace Guifo';
            captionButton.innerText = 'Descargar Guifo';
            readyBtn.innerText = 'Listo';
            stageInfo.innerText = "Guifo Subido Con Éxito";
            title.innerText = 'Guifo creado con éxito';
            
            captionContainer.removeAttribute('id');
            uploadContainer.setAttribute('id', 'preview');
            videoButtons.insertBefore(title, captionButton);
            uploadContainer.appendChild(readyBtn);
            readyBtn.addEventListener('click', finish);
            myGifsContainer.style.display = 'flex'; //Display myGifs container
        }).catch(err => {
            throw new Error(err)
        })
}

function copyLink() {
    navigator.clipboard.writeText(gif.src).then(() => {
        let copyBtn = document.getElementsByClassName('caption')[1];
        copyBtn.style.background = '#4180F6'
        setTimeout(() => {
            copyBtn.style.background = '#FFF4FD' 
        }, 3000);
    }).catch(err => {
        throw new Error(err);
    })
}

function readyAndRewrite() {
    captionButton.setAttribute('href', gif.src);
    captionButton.setAttribute('downlodad');
}

function downloadFile() { 
    captionButton.style.background = '#4180F6'
    setTimeout(() => {
        captionButton.style.background = '#FFF4FD' 
    }, 3000);
    invokeSaveAsDialog(blob, 'myFunnyGif.gif')
}

function finish() {
    let res = prompt('Esperamos disfrutes tu Gif. Escribe OK si desas volver a la pagina principal, de lo contrario permaneceras en está pantalla').toLowerCase();
    if (res === 'ok') {
        window.location = 'upload.html';
    }
}