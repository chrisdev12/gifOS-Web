function storeGif(blob) {
    const form = new FormData();
    let videoSrc = document.querySelector('video source');
    form.append('file', blob, 'myGif.mp4');
    console.log(form.get('file'));
    let gifUrl = URL.createObjectURL(blob);
    videoSrc.src = gifUrl;
}