const begin = document.getElementById('begin');
const uploadContainer = document.getElementsByClassName('upload-container')[0];
const instructionsContainer = document.getElementsByClassName('instructions-container')[0];
const myGifsContainer = document.getElementById('myGifs');
const uploadCloseWindow = document.querySelector('.upload-container .upload-info img');
const video_place = document.getElementsByTagName('video')[0];
const uploadActions = document.getElementsByClassName('upload-actions')
const minutes = document.getElementsByClassName('timer')[0];
const seconds = document.getElementsByClassName('timer')[1];
let captionButton = document.getElementById('caption');


//Hide instruction/pre-upload-container and display the upload-container (whereas the gifts will be captioned)
begin.addEventListener('click',showCaption)

uploadCloseWindow.addEventListener('click', showInstruction)


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