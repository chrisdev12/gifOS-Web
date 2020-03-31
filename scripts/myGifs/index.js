async function myGifsById(ids) {
    try {       
        let req = fetch(`http://api.giphy.com/v1/gifs?api_key=${apikey}&ids=${ids}`) 
        let res = await req;
        let json = await res.json();
        let gifs = json.data
        gifs.forEach(element => {
            let img = document.createElement('img')
            img.src = element.images.original.url;
            img.alt = 'MyGifo image // Uploaded on Giphy.com';
            myGifsContainer.appendChild(img);
        });
        return gifs
    } catch (err) {
        throw new Error (err)
    }
}