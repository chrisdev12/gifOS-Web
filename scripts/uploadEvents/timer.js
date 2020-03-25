let timer = {
    recording: null, //Store the interval (required to use the clearinterval),
    start: function () {
        let currSec = 1
        let currMin = 0
        this.recording = setInterval(() => {
            time[0].innerText = `0${currMin}`
            time[2].innerText = `0${currSec}`
            currSec += 1 
            
            if (currSec === 60) {
                currMin += 1
                currSec = 0
            }   
            if (currSec > 9) {
                time[2].innerText = currSec
            }             
        }, 1000)   
    },
    stop: function () {
        clearInterval(this.recording)
    } 
}