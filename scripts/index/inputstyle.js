//----Style change of searchbar when is receiving some input---

searchbar.addEventListener('input', function () {
    
    if (event.target.value.length == 0) { //Remain all same if any word is on input
        searchButton.classList.remove('nav-btn-input');
        
        switch (activeTheme) {
        case 'white':
            lupa.setAttribute('src', './images/lupa_inactive.svg');
            break;
        case 'dark':
            lupa.setAttribute('src', './images/CombinedShape.svg');
            break;
        };
        
    } else {
        searchButton.classList.add('nav-btn-input');
        
        switch (activeTheme) { //Active the image of input style
        case 'white':
            lupa.setAttribute('src', './images/lupa.svg');
            break;
        case 'dark':
            lupa.setAttribute('src', './images/lupa_light.svg');
            break;
        };
    }
})