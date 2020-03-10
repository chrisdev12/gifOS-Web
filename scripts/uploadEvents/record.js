const recordObject = {
    type: 'video',
    frameRate: 1,
    quality: 10,
    startRecording: function () { },
    stopRecording: function (blobURL) {
        return blobURL
    },
    getBlob: function () { },

};


/* Function that receives 2 parameters, the first  determines
the action of the recorder. The second possibilities stop the
 camera recording on the browserand only will be used on the 'stop' conditions.
 */
async function initRecorder(status, track) {
    try {
        if (status == 'Capturar') {
            track.stop();
            let gif = await navigator.mediaDevices.getUserMedia(constraints);
            video_place.srcObject = gif;
            video_place.play();
            currTrack = gif.getTracks()[0];
            recorder = RecordRTC(gif, recordObject);
            recorder.startRecording();
        } else if (status == 'Listo') {
            recorder.stopRecording(
                function () {
                    let blob = recorder.getBlob(); //getBlob must be passed as callback when our record is type:video
                    storeGif(blob);//On storage.js | Manipulate the recorded file and store it
                });
            track.stop();
        }
    }
    catch(err){
        throw new Error(`error al crear el objeto RecordRTC: "${err}"`);
    }    
}


function stopRecorder() {
    
}

function storeUrl(res) {
    console.log(res)
    var res = res;
}
