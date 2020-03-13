function storeGif(blob) {
    
    const form = new FormData();
    form.append('file', blob, 'file.gif');
    let url = URL.createObjectURL(blob);
    showRecordedGif(url)
}

function showRecordedGif(url) {
    let uploadUI = uploadActions[1];
    video_place.style.display = 'none';
    let gif = document.createElement('img');
    gif.classList.add('createdGif');
    gif.src = url;
    let repButton = document.createElement('button');
    repButton.innerText = 'Subir Guifo'
    repButton.setAttribute('id', 'upload')
    
    //-----Insert the new buttons and gif to the container-----
    uploadContainer.insertBefore(gif, uploadUI);
    uploadUI.appendChild(repButton);
    captionButton.innerText = 'Repetir captura'
}