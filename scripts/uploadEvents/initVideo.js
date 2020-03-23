let currTrack = null; //"Track" of the current videoCaption
let video = null; 

//-------------------------------------------------------------------
//Display the video through the webcam (not implies be recording)

uploadCloseWindow.addEventListener('click', cancel)

begin.addEventListener('click', startVideoCaption)

function startVideoCaption() { 
    const constraints = {
        audio: false,
        video: {
            height: { max: 480 }
        }
    }
    
    navigator.mediaDevices.getUserMedia(constraints)
        .then( (stream) => {
            video_place.srcObject = stream;
            video_place.play();
            currTrack = stream.getTracks()[0];
            video = stream
    })
}

captionButton.addEventListener('click', recordingLogic);


function recordingLogic(event) { 
    switch (event.target.innerText) {
        case ('Capturar'):
            time[0].innerText = '00';
            time[1].innerText = ':';
            time[2].innerText = '00';
            captionButton.innerText = 'Listo';
            initRecorder('Capturar',currTrack);
            break;
        case 'Listo':
            captionButton.innerText = 'Capturar';
            initRecorder('Listo',currTrack);
            break;
        case 'Repetir captura':
            time[0].innerText = '';
            time[1].innerText = '';
            time[2].innerText = '';
            rebuildVideo();
            destroyGif();   
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

function cancel() {
    alert('La grabación y/o el gif actual se perderan')
    window.location = 'upload.html'
}