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
    //TODO fix text size
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
    //fix select font
    updategMemeFont(font)
    renderMeme()
}

function onSave() {
    var memes = loadFromStorage(STORAGE_KEY)
    if (!memes) {
        memes = []
    }
    var imgContent = gCanvas.toDataURL('image/jpeg')
    memes.push(imgContent)

    saveToStorage(STORAGE_KEY, memes)


    //TODO save gMeme to gMemes array
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

function onUpload(ev) {
    //fix button
    loadImageFromInput(ev, renderImg)

}

function onAlignLeft() {
    updateGMemeTextLeft()
    renderMeme()
}

function onAlignCenter() {
    //TODO fix deleted line
    updateGMemeTextCenter()
    renderMeme()
}

function onAlignRight() {
    //TODO fix align right
    updateGMemeTextRight()
    renderMeme()
}
