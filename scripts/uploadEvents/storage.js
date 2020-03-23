let gif = document.createElement('img');

function storeGif(blob) {
    try {
        const form = new FormData();
        form.append('file', blob, 'file.gif');
        let url = URL.createObjectURL(blob);
        showRecordedGif(url,form)
    } catch (error) {
        throw new Error(`Error en storeGif: ${error}`)
    }
}

function showRecordedGif(url, file) {
    let videoButtons = uploadActions[1];
    let upload = document.getElementById('upload')
    let uploadBtn = document.createElement('button');
    
    video_place.style.display = 'none';
    gif.classList.add('createdGif');
    gif.src = url;
    
    uploadBtn.innerText = 'Subir Guifo'
    uploadBtn.setAttribute('id', 'upload')
    
    //-----Insert the new buttons and gif on their respective container-----
    captionContainer.appendChild(gif); 
    videoButtons.appendChild(upload); //Insert a new button on the buttons container
    captionButton.innerText = 'Repetir captura'; 
    
    // Post file to the Giphy upload endpoint if is required
    upload.addEventListener('click', function () {
        postEndpoint(file)
    })
}