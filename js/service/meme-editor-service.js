'use strict'

// const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
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

function drawText(text, x = 100, y = 80, color = 'white', textSize = 70, font = 'Impact') {
    gCtx.lineWidth = 3;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = color;
    // gCtx.font = `${textSize}px Impact`;
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
    var textWidth = gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt)
    gMeme.lines[gMeme.selectedLineIdx].xPos = (gCanvas.width / 2) - (textWidth.width / 2)
}
function updateGMemeTextRight() {
    var textWidth = gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt)
    gMeme.lines[gMeme.selectedLineIdx].xPos = (gCanvas.width) - (textWidth.width + 10)
}



// touch events drag & drop

// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()

// }

// function addMouseListeners() {
//     gCanvas.addEventListener('mousemove', onMove)
//     gCanvas.addEventListener('mousedown', onDown)
//     gCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gCanvas.addEventListener('touchmove', onMove)
//     gCanvas.addEventListener('touchstart', onDown)
//     gCanvas.addEventListener('touchend', onUp)
// }

// function onDown(ev) {
//     const pos = getEvPos(ev)
//     console.log('onDown()');
//     // if (!isCircleClicked(pos)) return
//     // setCircleDrag(true)
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'
// }
// function onMove(ev) {
//     console.log('onMove()');
//     const circle = getCircle();
//     if (circle.isDrag) {
//         const pos = getEvPos(ev)
//         const dx = pos.x - gStartPos.x
//         const dy = pos.y - gStartPos.y
//         moveCircle(dx, dy)
//         gStartPos = pos
//         renderCanvas()
//     }
// }

// function onUp() {
//     console.log('onUp()');
//     setCircleDrag(false)
//     document.body.style.cursor = 'grab'
// }

// function getEvPos(ev) {
//     var pos = {
//         x: ev.offsetX,
//         y: ev.offsetY
//     }
//     if (gTouchEvs.includes(ev.type)) {
//         ev.preventDefault()
//         ev = ev.changedTouches[0]
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
//         }
//     }
//     return pos
// }