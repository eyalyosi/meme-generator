'use strict'

function loadImageFromInput(ev, onImageReady) {
    // document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader()

    reader.onload = function (event) {
        // console.log('onload');
        var img = new Image()
        // Render on canvas
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
        // gImg = img
        // img.onload = () => onImageReady(img)

    }
    // console.log('after');
    reader.readAsDataURL(ev.target.files[0])

}

function renderImg(img) {
    gImg = img
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
}