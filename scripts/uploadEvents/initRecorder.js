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

function initRecorder(status, track) {
    try {
        if (status == 'Capturar') {
            timer.start()
            recorder = RecordRTC(video, recordObject);
            recorder.startRecording();
        } else if (status == 'Listo') {
            timer.stop()
            track.stop();
            recorder.stopRecording(
                function () {
                    //getBlob should be passed as callback, and manipulate the recorded file and store it on storage.js
                    let blob = recorder.getBlob(); 
                    storeGif(blob);
                }
            );
        }
    }
    catch(err){
        throw new Error(`error al crear el objeto RecordRTC: "${err}"`);
    }    
}
