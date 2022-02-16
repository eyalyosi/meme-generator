'use strict'

var gCanvas;
var gCtx;
var gImg
var gFillColor = 'white'
var gXpos = 30
var gYpos = 100

function startCanvas() {
    gCanvas = document.getElementById('canvas');
    gCtx = gCanvas.getContext('2d');
}

function onImgClick(img) {
    gImg = img
    document.querySelector('.main-content').classList.add('hide')
    document.querySelector('.meme-editor').classList.add('show')
    updateGMemeImgId(img)
    renderMeme()
}

function renderMeme() {
    const meme = getGMeme()
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
    drawText(meme.lines[0].txt, gXpos, gYpos, gFillColor, meme.lines[0].size)
}

function onAddText(text) {
    if (!text) return
    renderMeme()
    gYpos += 320
}

function onTypeText(text) {
    updateGMemeText(text)
    onAddText(text)
}

function onFillColor(color) {
    gFillColor = color
    updateGMemeLineColor(gFillColor)
}

function onEnlargeText() {
    enlargeText()
    renderMeme()
}

function onDecreaseText() {
    decreaseText()
    renderMeme()
}


function onSetfont(font) {

}