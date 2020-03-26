const recordObject = {
    type: 'gif',
    frameRate: 1,
    quality: 10,
    startRecording: function () { },
    stopRecording: function (blobURL) {
        return blobURL
    },
    getBlob: function () { },
};

/* Function that receives 2 parameters, the first  determines the action 
of the recorder. The second possibilities stop the camera recording on the 
browserand only will be used on the 'stop' conditions.
 */

function initRecorder(status) {
    try {
        switch (status) {
            case 'Capturar':
                beginCaptionStyle();
                recorder = RecordRTC(video, recordObject);
                timer.start()
                recorder.startRecording();
                setTimeout(() => {
                    captionButton.removeAttribute('disabled')  
                }, 1500);
                break;
            case 'Listo':
                endCaptionStyle();
                timer.stop();
                video.getTracks()[0].stop();
                //getBlob should be passed as callback, and manipulate the recorded file and store it on storage.js
                recorder.stopRecording(
                    function () {        
                        storeGif(recorder.getBlob());
                    }
                );
                break;
            default:
                alert('Error al iniciar la grabación, intenta de nuevo')
                window.location = 'upload.html';
                break;
        }
    }
    catch (err) {
        alert('Error al iniciar la grabación, intenta de nuevo')
        window.location = 'upload.html'
        throw new Error(`error al inicializar RecordRTC: "${err}"`);
    }    
}


function beginCaptionStyle() {
    timerContainer.style.opacity = '1';
    captionButton.innerText = 'Listo';
    captionButton.disabled = true;
    captionButton.setAttribute('class', 'active_record')
    stageInfo.innerText = 'Capturando Tu Guifo'
    //Ensure that the timer always set to 00:00 when the caption start
    time[0].innerText = '00'
    time[2].innerText = '00'
}

function endCaptionStyle() {
    captionButton.innerText = 'Capturar';
    captionButton.classList.remove('active_record');
    stageInfo.innerText = 'Vista Previa'
}