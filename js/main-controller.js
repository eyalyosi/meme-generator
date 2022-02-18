'use strict'


function init() {
    renderGallery()
    startCanvas()
    resizeCanvas()
    addListeners()
    document.querySelector('.meme-editor').classList.add('hide')
}

function renderGallery() {
    const images = getImages()
    const imagesStrHtml = images.map((img) => {
        return `
        <div class="img-card">
                <img  class="img" id="${img.id}" src="${img.url}" alt="" onclick="onImgClick(this)">
        </div>`
    })
    document.querySelector('.meme-gallery').innerHTML = imagesStrHtml.join('')
}

function onGallery() {
    document.querySelector('.main-content').classList.remove('hide')
    document.querySelector('.meme-editor').classList.add('hide')
    clearCanvas()
}

function onMemeEditor() {
    //TODO show random img on canvas
    document.querySelector('.main-content').classList.add('hide')
    document.querySelector('.meme-editor').classList.remove('hide')
}

function onMyMemes() {
    document.querySelector('.main-content').classList.add('hide')
    document.querySelector('.meme-editor').classList.add('hide')
    clearCanvas()
    renderMyMeme()
}

function onOpenMenu() {
    document.body.classList.toggle('menu-open')
}

function onCloseNav() {
    document.body.classList.toggle('menu-open')
}

function downloadImg(elLink) {
    gCtx.fillStyle = 'white'
    var imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onSearchMeme(text) {

    console.log('hi');
}





function onSurpriseMe() {

    var randomImgId = getRandomInt(1, 18)
    onMemeEditor()
    var img = getImgById(randomImgId)
    console.log(img);
    // var currImg = Document.getImgById('')
    // console.log(currImg);
    // gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);

    var randomSentenceId = getRandomInt(0, 14)
    var randomSentence = memesSentences[randomSentenceId]
    var randomTextSize = getRandomInt(20, 40)
    var randomColor = getRandomColor()

    var randomNumberLine = getRandomInt(1, 2)
    if (randomNumberLine === 1) {
        drawText(randomSentence, 20, 80, randomColor, randomTextSize)

    } else {
        drawText(randomSentence, 20, 80, randomColor, randomTextSize)
        drawText(randomSentence, 20, gCanvas.width - 80, randomColor, randomTextSize)
    }
}

