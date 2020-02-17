const themechanger = document.querySelector('#selectTheme');
const logo = document.querySelector('header img');
const lupa = document.querySelector('.nav-btn img');
let styleFile = document.querySelector('head link');
let activeTheme = 'white'; //To be able to know the current theme 
//in case of need this to implment some event;
    
themechanger.addEventListener('change', function () {
    
    switch (event.target.value) {
        case 'white': styleFile.setAttribute('href', './styles/index/whitemode.css')
            logo.setAttribute('src', './images/gifOF_logo.png');
            lupa.setAttribute('src', './images/lupa_inactive.svg');
            activeTheme = 'white';
            break;
        case 'dark': styleFile.setAttribute('href', './styles/index/darkmode.css')
            logo.setAttribute('src', './images/gifOF_logo_dark.png');
            lupa.setAttribute('src', './images/CombinedShape.svg');
            activeTheme = 'dark';
            break;    
    }
});