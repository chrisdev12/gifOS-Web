let videoButtons = document.getElementsByClassName('upload-buttons')[0]
let gif = document.createElement('img');

const form = new FormData();

function storeGif(blob) {
    try {
        form.append('file', blob, 'file.gif');
        let url = URL.createObjectURL(blob);
        showRecordedGif(url);
    } catch (error) {
        throw new Error(`Error en storeGif: ${error}`)
    }
}

function showRecordedGif(url) {
    let uploadBtn = captionButton.cloneNode(true);
    uploadBtn.innerText = 'Subir Guifo'
    gif.classList.add('createdGif');
    gif.src = url; 
    video_place.style.display = 'none';

    //-----Insert the new buttons and gif on their respective container-----
    captionContainer.appendChild(gif); 
    videoButtons.appendChild(uploadBtn); //Insert a new button on the buttons container
    uploadBtn.addEventListener('click',recordingLogic) //RecordingLogic control the flow of the gif record
    captionButton.innerText = 'Repetir captura'; 
}