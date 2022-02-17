'use strict'
var gMeme = {
    selectedImgId: '',
    selectedLineIdx: 0,

    lines: [
        {
            xPos: 100,
            yPos: 80,
            txt: '',
            size: 70,
            aling: 'left',
            color: 'white',
            font: 'Impact',
        }
    ]
}

function getGMeme() {
    return gMeme
}

function updateGMemeImgId(img) {
    gMeme.selectedImgId = img.id
}

function updateGMemeText(text) {
    if (!gMeme.lines[gMeme.selectedLineIdx]) {
        if (gMeme.selectedLineIdx === 1) {
            gMeme.lines[gMeme.selectedLineIdx] = {
                xPos: 100,
                yPos: gCanvas.width - 80,
                txt: '',
                size: 70,
                aling: 'left',
                color: 'white',
                font: 'Impact',
            }
        } else {
            gMeme.lines[gMeme.selectedLineIdx] = {
                xPos: 100,
                yPos: gCanvas.width / 2,
                txt: '',
                size: 70,
                aling: 'left',
                color: 'white',
                font: 'Impact',
            }
        }
    }
    else {
        gMeme.lines[gMeme.selectedLineIdx].txt = text
    }
}

function updateGMemeLineColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function drawText(text, x = 100, y = 80, color = 'white', textSize = 70, font = 'Impact') {
    gCtx.lineWidth = 3;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = color;
    gCtx.font = `${textSize}px Impact`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function enlargeText() {
    gMeme.lines[gMeme.selectedLineIdx].size++
}

function decreaseText() {
    gMeme.lines[gMeme.selectedLineIdx].size--
}

function addListeners() {
    // addMouseListeners()
    // addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        // renderCanvas()
    })
}



