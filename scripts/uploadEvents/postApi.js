// Post our blob to the upload Giphy endpoint if is required

function createUploadEvent(gif) {
    let upload = document.getElementById('upload');
    
    upload.addEventListener('click', function () {
        postEndpoint(gif)
    })
}

/*https://muffinman.io/uploading-files-using-fetch-multipart-form-data/ 
Must be viewed to comprenhense why 'content-Type': 'multipart/form-data' must be not
included */

function postEndpoint(gif) {
    try {
        const apikey = 'FomuiY9mN225fs0Hy6WPQTYPrumdf6R8';
        fetch(`https://upload.giphy.com/v1/gifs?api_key=${apikey}`,
            {
                method: 'POST',
                body: gif   
            }).then((response) => {
                return response.json()
            }).then((myjson) => {
                let id = myjson.data.id
                console.log(id)
                successfulUpload(id)
            }).catch((error) => {
               throw new Error (error)
            })

    } catch (error) {
        console.log(error)
    }
}

function successfulUpload(res) {
    //here should be implemented a Timer load
    localStorage.setItem('upload', res);
    
    let videoButtons = uploadActions[1];
    uploadContainer.insertBefore(gif, videoButtons);
}
    
