const constraints = { audio: false, video: { height: { max: 480 } } }
let currTrack = null; //"Track" the current video | Reasigned on startVideoCaption()  
//-------------------------------------------------------------------
//Display the video through the webcam (not implies be recording)

begin.addEventListener('click', startVideoCaption)

function startVideoCaption() {  
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            video_place.srcObject = stream;
            video_place.play();
            currTrack = stream.getTracks()[0];
    })
}

captionButton.addEventListener('click', recordingLogic);


function recordingLogic(event) { 
    switch (event.target.innerText) {
        case ('Capturar' || 'Repetir captura'):
            captionButton.innerText = 'Listo';
            initRecorder('Capturar',currTrack);
            break;
        case 'Listo':
            captionButton.innerText = 'Capturar';
            initRecorder('Listo',currTrack);
            break;
        case 'Repetir captura':
            rebuildVideo();
            destroyGif();
            seconds.innerText = '';
            minutes.innerText = '';
            break;
    } 
}

//Alter the dom to show again the video when the user want retake his gifo record
function rebuildVideo() {
    let upload = document.getElementById('upload');
    uploadActions[1].removeChild(upload)
    captionButton.innerText = 'Capturar'
    video_place.style.display = 'block'
    startVideoCaption()

}

//Destroy / remove the img that contains the unwished gif
function destroyGif() {
    let gif = document.getElementsByClassName('createdGif')[0];
    uploadContainer.removeChild(gif)
}

