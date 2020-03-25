let videoButtons = document.getElementsByClassName('upload-buttons')[0]
let uploadBtn = document.createElement('button');

function storeGif(blob) {
    try {
        const form = new FormData();
        form.append('file', blob, 'file.gif');
        let url = URL.createObjectURL(blob);
        let uploadBtn = showRecordedGif(url);
        console.log(form[0])
        console.log(form.get('file'))
        // Post file to the Giphy upload endpoint if is required
        uploadBtn.addEventListener('click', function () {
            postEndpoint(form)
        })
    } catch (error) {
        throw new Error(`Error en storeGif: ${error}`)
    }
}

function showRecordedGif(url) {
    let gif = document.createElement('img');
    gif.classList.add('createdGif');
    gif.src = url;
    
    video_place.style.display = 'none';
    uploadBtn.innerText = 'Subir Guifo'
    uploadBtn.setAttribute('id', 'upload')
    
    //-----Insert the new buttons and gif on their respective container-----
    captionContainer.appendChild(gif); 
    videoButtons.appendChild(uploadBtn); //Insert a new button on the buttons container
    captionButton.innerText = 'Repetir captura'; 
    
    let upload = document.getElementById('upload')
    return upload
}