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
        if (status === 'Capturar') {
            beginCaptionStyle(); 
            timer.start()
            recorder = RecordRTC(video, recordObject);
            recorder.startRecording();
        } else if (status === 'Listo') {
            endCaptionStyle();
            timer.stop();
            video.getTracks()[0].stop();
            recorder.stopRecording(
                function () {
                    //getBlob should be passed as callback, and manipulate the recorded file and store it on storage.js
                    storeGif(recorder.getBlob());
                }
            );
        }
    }
    catch(err){
        throw new Error(`error al crear el objeto RecordRTC: "${err}"`);
    }    
}


function beginCaptionStyle() {
    timerContainer.style.opacity = '1';
    captionButton.innerText = 'Listo';
    captionButton.setAttribute('class', 'active_record')
    stageInfo.innerText = 'Capturando Tu Guifo'
}

function endCaptionStyle() {
    captionButton.innerText = 'Capturar';
    captionButton.classList.remove('active_record');
    stageInfo.innerText = 'Vista Previa'
}