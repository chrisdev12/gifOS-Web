
/* Function that receives 2 parameters, the first one is mandatory and determines
the action of the recorder, the 2 possibilities stop the camera recording on the browser
and only will be used on the 'stop' conditions.
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
            recorder.stopRecording();
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
