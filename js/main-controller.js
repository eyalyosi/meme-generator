'use strict'


function init() {
    renderGallery()
    startCanvas()
    resizeCanvas()
    addListeners()
    document.querySelector('.meme-editor').classList.add('hide')
}

function renderGallery() {
    const images = getMemesForDisplay()

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
    document.querySelector('.my-memes-container').classList.add('hide')
    clearCanvas()
}

function onMemeEditor() {
    document.querySelector('.main-content').classList.add('hide')
    document.querySelector('.meme-editor').classList.remove('hide')
    document.querySelector('.my-memes-container').classList.add('hide')

}

function onMyMemes() {
    document.querySelector('.main-content').classList.add('hide')
    document.querySelector('.meme-editor').classList.add('hide')
    document.querySelector('.my-memes-container').classList.remove('hide')

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
    // gCtx.fillStyle = 'white'
    var imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onSearchMeme(searchKey) {
    setSearchKey(searchKey)
}

function onSurpriseMe() {
    //TODO can edit random meme
    var randomImgId = getRandomInt(1, 18)
    onMemeEditor()

    var imgToCanvas = document.getElementById(randomImgId);
    gCtx.drawImage(imgToCanvas, 0, 0, gCanvas.width, gCanvas.height);

    var randomSentenceId = getRandomInt(0, 14)
    var randomSentenceId2 = getRandomInt(0, 14)
    var randomSentence2 = memesSentences[randomSentenceId2]
    var randomSentence = memesSentences[randomSentenceId]
    var randomTextSize = getRandomInt(30, 60)
    var randomColor = getRandomColor()

    var randomNumberLine = getRandomInt(1, 2)
    if (randomNumberLine === 1) {
        drawText(randomSentence, 20, 80, randomColor, randomTextSize)
    } else {
        drawText(randomSentence, 20, 80, randomColor, randomTextSize)
        drawText(randomSentence2, 20, gCanvas.width - 80, randomColor, randomTextSize)
    }
}

