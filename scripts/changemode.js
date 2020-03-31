const themechanger = document.getElementById('selectTheme');
//imgTheme: Logo and lupe images
const imgTheme = document.getElementsByClassName('img-theme');
const stylelink = document.getElementsByTagName('link')[0];
let activeTheme = 'white'; // know the current theme 
    
themechanger.addEventListener('change', function () {
    
    switch (event.target.value) {
        case 'white': stylelink.setAttribute('href', './styles/index/whitemode.css')
            imgTheme[0].setAttribute('src', './images/gifOF_logo.png');
            imgTheme[1].setAttribute('src', './images/lupa_inactive.svg');
            activeTheme = 'white';
            break;
        case 'dark': stylelink.setAttribute('href', './styles/index/darkmode.css')
            imgTheme[0].setAttribute('src', './images/gifOF_logo_dark.png');
            imgTheme[1].setAttribute('src', './images/CombinedShape.svg');
            activeTheme = 'dark';
            break;    
    }
});