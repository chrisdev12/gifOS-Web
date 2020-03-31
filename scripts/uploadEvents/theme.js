const stylelink = document.getElementsByTagName('link')[0];
let imgLogo = document.getElementsByClassName('logo')[0]

switch (localStorage.getItem('Gifos-theme')) {
    case 'dark':
        stylelink.setAttribute('href', './styles/uploadPage/darkmode.css')
        imgLogo.setAttribute('src', './images/gifOF_logo_dark.png');
        break;   
    default:
        stylelink.setAttribute('href', './styles/uploadPage/whitemode.css')
        imgLogo.setAttribute('src', './images/gifOF_logo.png');
        break;   
}

