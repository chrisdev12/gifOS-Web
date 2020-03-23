let newGif = document.createElement('img');

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
    video_place.style.display = 'none';
    newGif.classList.add('createdGif');
    newGif.src = url;
    let upload = document.createElement('button');
    upload.innerText = 'Subir Guifo'
    upload.setAttribute('id', 'upload')
    
    //-----Insert the new buttons and gif on their respective container-----
    uploadContainer.insertBefore(newGif, videoButtons); //Insert gif before the buttons container
    videoButtons.appendChild(upload); //Inser a new button on the buttons container
    captionButton.innerText = 'Repetir captura';
    
    createUploadEvent(file)
}