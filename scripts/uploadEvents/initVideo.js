let video = null;

uploadCloseWindow.addEventListener('click', cancel)
begin.addEventListener('click', startVideoCaption)
captionButton.addEventListener('click', recordingLogic);

//Display the video through the webcam (not implies be recording)
async function startVideoCaption() { 
    const constraints = {
        audio: false,
        video: {
            height: { max: 720 }
        }
    }
    
    let stream = await  navigator.mediaDevices.getUserMedia(constraints)
    video_place.srcObject = stream;
    video_place.play();
    video = stream;
    captionButton.removeAttribute('disabled')
}

function recordingLogic(event) { 
    switch (event.target.innerText) {
        case 'Capturar':
            initRecorder('Capturar');
            break;
        case 'Listo':
            initRecorder('Listo');
            break;
        case 'Repetir captura':
            timerContainer.style.opacity = '0';
            rebuildVideo(); 
            stageInfo.innerText = 'Un Chequeo Antes de Empezar'
            break;
    } 
}

//Alter the dom to show again the video when the user require retake a gifo record
function rebuildVideo() {
    let gif = document.getElementsByClassName('createdGif')[0];
    captionContainer.removeChild(gif);
    let upload = document.getElementById('upload');
    videoButtons.removeChild(upload);
    captionButton.innerText = 'Capturar'
    video_place.style.display = 'block'
    startVideoCaption()
}

function cancel() {
    alert('La grabación y/o el gif actual se perderan')
    window.location = 'upload.html'
}