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
}

function onOpenMenu() {
    document.body.classList.toggle('menu-open')
}

function onCloseNav() {
    document.body.classList.toggle('menu-open')
}