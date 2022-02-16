'use strict'


function init() {
    renderGallery()
    startCanvas()
}

function renderGallery() {
    const images = getImages()
    const imagesStrHtml = images.map((img) => {
        return `
        <div class="img-card">
                <img  class="img" id="${img.id}" src="${img.url}" alt="" onclick="onImgClick(this)">
        </div>
        `
    })
    document.querySelector('.meme-gallery').innerHTML = imagesStrHtml.join('')
}



