const begin = document.querySelector('#begin');
const uploadContainer = document.querySelector('.upload-container');
const instructionsContainer = document.querySelector('.instructions-container');
const myGifsContainer = document.querySelector('#myGifs');
const uploadCloseWindow = document.querySelector('.upload-container .upload-info img');

//Hide instruction/pre-upload-container and display the upload-container (whereas the gifts will be captioned)
begin.addEventListener('click', function () {
    showCaption();
});

uploadCloseWindow.addEventListener('click', function () {
    showInstruction();
})

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