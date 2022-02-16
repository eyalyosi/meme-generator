'use strict'

var gMeme = {
    selectedImgId: '',
    selectedLineIdx: 0,

    lines: [
        {
            txt: '',
            size: 70,
            aling: 'left',
            color: gFillColor,
        },
        {
            txt: '',
            size: 70,
            aling: 'left',
            color: gFillColor,
        }
    ]
}

function updateGMemeImgId(img) {
    gMeme.selectedImgId = img.id
}

function getGMeme() {
    return gMeme
}

function updateGMemeText(text) {
    gMeme.lines[0].txt = text
}

function updateGMemeLineColor(color) {
    gMeme.lines[0].color = color
}


function drawText(text, x, y, color, textSize) {
    gCtx.lineWidth = 3;
    gCtx.strokeStyle = color;
    gCtx.fillStyle = color;
    gCtx.font = `${textSize}px Impact`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function enlargeText() {
    gMeme.lines[0].size++
}

function decreaseText() {
    gMeme.lines[0].size--
}


// function getImgById(imgId) {
//     const img = gImgs.find(img => imgId === img.id)
//     return img
// }

