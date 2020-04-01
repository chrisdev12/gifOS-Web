let video;

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
        case 'Subir Guifo':
             // Post file to the Giphy upload endpoint if is required
            postEndpoint(form);
            break;
        case 'Descargar Guifo':
            downloadFile();
            break; 
        case 'Copiar Enlace Guifo':
            copyLink()
            break;
        default:
            alert('Error / Será redirigido a la pantalla principal');
            window.location = 'upload.html';
            break;
    } 
}


//Alter the dom to show again the video when the user require retake a gifo record
function rebuildVideo() {
    captionContainer.removeChild(gif);
    let uploadBtn = document.getElementsByClassName('caption')[1];
    videoButtons.removeChild(uploadBtn);
    
    switch (localStorage.getItem('Gifos-theme')) {
    
        case 'dark':
            captionButton.innerHTML =
            `<span>
                <img class="upload-img-btn" src="./images/camera_light.svg" alt="camera icon">
            </span>Capturar`;
            break;     
        default:
            captionButton.innerHTML =
            `<span>
                <img class="upload-img-btn" src="./images/camera.svg" alt="camera icon">
            </span>Capturar`;
            break;
    }
    
    video_place.style.display = 'block'
    startVideoCaption()
}

function cancel() {
    alert('La grabación y/o el gif actual se perderan')
    window.location = 'upload.html'
}