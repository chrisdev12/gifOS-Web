const stylelink = document.getElementsByTagName('link')[0];
let logotype = document.getElementById('logotype');

switch (localStorage.getItem('Gifos-theme')) {
    case 'dark':
        stylelink.setAttribute('href', './styles/uploadPage/darkmode.css')
        logotype.setAttribute('src', './images/gifOF_logo_dark.png');
        break;   
    default:
        stylelink.setAttribute('href', './styles/uploadPage/whitemode.css')
        logotype.setAttribute('src', './images/gifOF_logo.png');
        break;   
}

