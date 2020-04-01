const stylelink = document.getElementsByTagName('link')[0];
let logotype = document.getElementById('logotype');
const imgLogo = document.getElementsByClassName('logo')[0]
const cameraImg = document.getElementsByClassName('upload-img-btn')[0]

switch (localStorage.getItem('Gifos-theme')) {
    
    case 'dark':
        stylelink.setAttribute('href', './styles/uploadPage/darkmode.css')
        logotype.setAttribute('src', './images/gifOF_logo_dark.png');
        cameraImg.setAttribute('src', './images/camera_light.svg');
        break;     
    default:
        stylelink.setAttribute('href', './styles/uploadPage/whitemode.css');
        logotype.setAttribute('src', './images/gifOF_logo.png');
        cameraImg.setAttribute('src', './images/camera.svg');
        break;   
}

