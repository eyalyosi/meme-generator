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

const memesSentences = [
    'I never eat falafel',
    'DOMS DOMS EVERYWHERE',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'I`m a simple man i see vanilla JS, i click like!',
    'JS, HTML,CSS?? Even my momma can do that',
    'May the force be with you',
    'I know JS',
    'JS Where everything is made up and the rules dont matter',
    'Not sure if im good at programming or good at googling',
    'But if we could',
    'JS what is this?',
    'Write hello world , add to cv 7 years experienced',
];

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

function updategMemeFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function drawText(text, x = 100, y = 80, color = 'white',strokeStyle = 'black' ,textSize = 70, font = 'Impact') {
    gCtx.lineWidth = 3;
    gCtx.strokeStyle = strokeStyle;
    gCtx.fillStyle = color;
    gCtx.font = `${textSize}px ${font}`;
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

function updateGMemeTextLeft() {
    gMeme.lines[gMeme.selectedLineIdx].xPos = 10
}
function updateGMemeTextCenter() {
    //TODO fix txt delete
    var textWidth = gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt)
    console.log(textWidth);
    gMeme.lines[gMeme.selectedLineIdx].xPos = (gCanvas.width / 2) - (textWidth / 2)

}
function updateGMemeTextRight() {
    // TODO fix text go out of canvas
    gMeme.lines[gMeme.selectedLineIdx].xPos = 400
}

