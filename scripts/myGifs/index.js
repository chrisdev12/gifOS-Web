const apikey = 'FomuiY9mN225fs0Hy6WPQTYPrumdf6R8';



async function myGifsById(ids) {
    try {       
        let req = fetch(`http://api.giphy.com/v1/gifs?api_key=${apikey}&ids=${ids}`) 
        let res = await req;
        let gifs = await res.json();
        return gifs.data;
    } catch (err) {
        throw new Error (err)
    }
}


let gifs = myGifsById(localStorage.getItem('upload'))
    .then(res => {
        res.forEach(element => {
            console.log(element.images.original)
            let img = document.createElement('img')
            img.src = element.images.original.url
            myGifsContainer.appendChild(img);
        });
    }).catch(err => {
        console.error(err)
    })
