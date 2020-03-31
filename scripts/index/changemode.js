const themechanger = document.getElementById('selectTheme');
//imgTheme: Logo and lupe images
const imgTheme = document.getElementsByClassName('img-theme');
const stylelink = document.getElementsByTagName('link')[0];
let activeTheme = 'white'; // know the current theme 
let optionsContainer   

themechanger.addEventListener('click',showThemeOptions);

function showThemeOptions() {
    if (themechanger.classList.contains('non-clicked')){
        console.log('entrando')
        optionsContainer = document.createElement('div')
        let white = document.createElement('button');
        let dark = white.cloneNode('true');
        white.innerHTML = '<u>S</u>ailor Day';
        white.value = 'white';
        dark.innerText = 'Sailor Night';
        dark.value = 'dark';
        optionsContainer.appendChild(white);
        optionsContainer.appendChild(dark);
        themechanger.appendChild(optionsContainer);
        themechanger.classList.remove('non-clicked');
        white.addEventListener('click', themeToggle);
        dark.addEventListener('click', themeToggle);
    } else {
        //Show and hide the optionsContainer
        optionsContainer.classList.toggle('showTheme');
    }

}

/**
 * Due that We want to keep the dark and white mode in the upload.html too
 * We going to use localStorage to let know to upload.htlm waht them was currently
 * active and display it
 */

function themeToggle() {
    switch (event.target.value) {
        case 'white': stylelink.setAttribute('href', './styles/index/whitemode.css')
            imgTheme[0].setAttribute('src', './images/gifOF_logo.png');
            imgTheme[1].setAttribute('src', './images/lupa_inactive.svg');
            activeTheme = 'white';
            localStorage.setItem('Gifos-theme','white')
            break;
        case 'dark': stylelink.setAttribute('href', './styles/index/darkmode.css')
            imgTheme[0].setAttribute('src', './images/gifOF_logo_dark.png');
            imgTheme[1].setAttribute('src', './images/CombinedShape.svg');
            activeTheme = 'dark';
            localStorage.setItem('Gifos-theme','dark')
            break;    
    }
}

