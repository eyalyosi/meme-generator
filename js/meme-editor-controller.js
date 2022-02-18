'use strict'

var gCanvas;
var gCtx;
var gImg
var gCurrLineIdx
const STORAGE_KEY = 'memeDB'

function startCanvas() {
    gCanvas = document.getElementById('canvas');
    gCtx = gCanvas.getContext('2d');
}

function onImgClick(img) {
    gImg = img
    console.log(img);
    document.querySelector('.main-content').classList.add('hide')
    document.querySelector('.meme-editor').classList.remove('hide')
    updateGMemeImgId(img)
    renderMeme()
}

function renderMeme() {
    const meme = getGMeme()
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
    meme.lines.forEach((line) => {
        drawText(line.txt, line.xPos, line.yPos, line.color, line.size, line.font)
    })
}

function onAddText() {
    gMeme.selectedLineIdx++
    document.getElementById('line-text').value = ''
    renderMeme()
}

function onTypeText(text) {
    updateGMemeText(text)
    renderMeme()
}

function onFillColor(color) {
    updateGMemeLineColor(color)
    renderMeme()
}

function onEnlargeText() {
    enlargeText()
    renderMeme()
}

function onDecreaseText() {
    decreaseText()
    renderMeme()
}

function onSelectedText() {
    if (gMeme.lines.length === 0) return
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
}

function onDeleteText() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    renderMeme()
}

function onSetfont(font) {
    updategMemeFont(font)
    renderMeme()
}

function onSave() {
    saveToStorage(STORAGE_KEY, gMeme)
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    // gCanvas.width = elContainer.offsetWidth - 50
    // Unless needed, better keep height fixed.
    // gCanvas.height = elContainer.offsetHeight
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function onAlignLeft() {
    updateGMemeTextLeft()
    renderMeme()
}

function onAlignCenter(){
    updateGMemeTextCenter()
    renderMeme()
}

function onAlignRight(){
    updateGMemeTextRight()
    renderMeme()
}
