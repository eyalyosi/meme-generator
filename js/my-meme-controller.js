'use strice'

function renderMyMeme() {
    const memes = loadFromStorage(STORAGE_KEY)
    if (!memes) return
    const savedMemeStrHtml = memes.map((meme) => {
        return `
        <div class="my-memes">
            <img  class="img" src="${meme}" alt="" >
        </div>
            `
    })
    document.querySelector('.my-memes-container').innerHTML = savedMemeStrHtml.join('')
}