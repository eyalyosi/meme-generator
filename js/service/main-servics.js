'use strict'

var gKeyWordSearchCountMap = { 'funny': 0, 'animel': 0 }
var gImgs = [
    { id: '1', url: '/images/1.jpg', keywords: ['trump', 'politics', 'funny'] },
    { id: '2', url: '/images/2.jpg', keywords: ['puppy', 'animel', 'cute'] },
    { id: '3', url: '/images/3.jpg', keywords: ['puppy', 'animel', 'cute', 'baby'] },
    { id: '4', url: '/images/4.jpg', keywords: ['animel', 'cat', 'baby'] },
    { id: '5', url: '/images/5.jpg', keywords: ['boy', 'funny'] },
    { id: '6', url: '/images/6.jpg', keywords: ['funny'] },
    { id: '7', url: '/images/7.jpg', keywords: ['cute', 'baby'] },
    { id: '8', url: '/images/8.jpg', keywords: ['funny'] },
    { id: '9', url: '/images/9.jpg', keywords: ['funny', 'baby'] },
    { id: '10', url: '/images/10.jpg', keywords: ['obama', 'politics', 'funny'] },
    { id: '11', url: '/images/11.jpg', keywords: ['sport', 'kiss'] },
    { id: '12', url: '/images/12.jpg', keywords: ['funny'] },
    { id: '13', url: '/images/13.jpg', keywords: ['funny'] },
    { id: '14', url: '/images/14.jpg', keywords: ['matrix'] },
    { id: '15', url: '/images/15.jpg', keywords: ['game of thrones'] },
    { id: '16', url: '/images/16.jpg', keywords: ['star trek', 'funny'] },
    { id: '17', url: '/images/17.jpg', keywords: ['putin', 'politics'] },
    { id: '18', url: '/images/18.jpg', keywords: ['toys', 'funny'] },
]

function getImages() {
    return gImgs
}