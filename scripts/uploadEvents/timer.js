let timer = {
    recording: null, //Store the interval (required to use the clearinterval),
    start: function () {
        console.log('timer')
        let currSec = 0
        let currMin = 0
        this.recording = setInterval(() => {
            currSec += 1   
            if (currSec === 60) {
                currMin += 1
                currSec = 0
            }
            
            seconds.innerText = currSec
            minutes.innerText = `${currMin} :`
        }, 1000)   
    },
    stop: function () {
        clearInterval(this.recording)
    } 
}