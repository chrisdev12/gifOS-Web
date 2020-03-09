const video_place = document.getElementsByTagName('video')[0];
const captionAction = document.getElementById('caption');
const constraints = { audio: false, video: { height: { max: 480 } } }
let caption = null; //Here We go to save the current caption to be able to stop it if required.  


//modifier of the button text. 

captionAction.addEventListener('click', beginStop_caption);


function beginStop_caption(event) {
    
    switch (event.target.innerText) {
        case 'Capturar':
            captionAction.innerText = 'Listo';
            startVideoCaption();
            break;
        case 'Listo':
            stopVideoCaption(caption);
            break;
    } 
}

function startVideoCaption() {
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
        video_place.srcObject = stream;
        video_place.play();
        
        caption = stream.getTracks()[0];
        console.log(caption);
    })
}

//Receives the current track, that is the caption that the camera is displaying
// and stopt it    
function stopVideoCaption(caption) {
    caption.stop()
}

