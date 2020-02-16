const themechanger = document.querySelector('#selectTheme');
const logo = document.querySelector('header img');
const lupa = document.querySelector('.nav-btn img');
    
themechanger.addEventListener('change', function () {
    let styleFile = document.querySelector('head link');
    
    switch (event.target.value) {
        case 'white': styleFile.setAttribute('href', './styles/index/whitemode.css')
            logo.setAttribute('src', './images/gifOF_logo.png');
            lupa.setAttribute('src', './images/lupa_inactive.svg');
            break
        case 'dark': styleFile.setAttribute('href', './styles/index/darkmode.css')
            logo.setAttribute('src', './images/gifOF_logo_dark.png');
            lupa.setAttribute('src', './images/lupa.svg');
            break    
    }
});