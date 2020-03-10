const video_place = document.getElementsByTagName('video')[0];
const captionButton = document.getElementById('caption');
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

//Main behavior funcion to create and stop stored. 
captionButton.addEventListener('click', recordingLogic);

function recordingLogic(event) {  
    switch (event.target.innerText) {
        case 'Capturar':
            captionButton.innerText = 'Listo';
            initRecorder('Capturar',currTrack);
            break;
        case 'Listo':
            captionButton.innerText = 'Capturar';
            initRecorder('Listo',currTrack);
            break;
    } 
}




