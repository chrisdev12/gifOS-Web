const apikey = 'FomuiY9mN225fs0Hy6WPQTYPrumdf6R8';
const begin = document.getElementById('begin');
const uploadContainer = document.getElementsByClassName('upload-container')[0];
const instructionsContainer = document.getElementsByClassName('instructions-container')[0];
const myGifsContainer = document.getElementById('myGifs');
const uploadCloseWindow = document.querySelector('.upload-container .upload-info img');
const stageInfo= document.getElementById('upload-stage-info');
const captionContainer = document.getElementsByClassName('showVideo')[0];
const video_place = document.getElementsByTagName('video')[0];
const timerContainer = document.getElementsByClassName('timer-container')[0]
const time = document.getElementsByClassName('timer');
let captionButton = document.getElementsByClassName('caption')[0];


//Hide instruction/pre-upload-container and display the upload-container (whereas the gifts will be captioned)
begin.addEventListener('click',showCaption)

function showCaption() {
    instructionsContainer.style.display = 'none';
    myGifsContainer.style.display = 'none';
    uploadContainer.style.display = 'flex';
}

function showInstruction() {
    instructionsContainer.style.display = 'flex';
    myGifsContainer.style.display = 'flex';
    uploadContainer.style.display = 'none';
}

myGifsById(localStorage.getItem('mygifs'))