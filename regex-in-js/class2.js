const { johnWick } = require("./baseText");

console.log('Quantifiers')

/*
    * - 0 or n
    + - 1 or n
    ? - 0 or 1
    \ - Escape
    {n,m} - n until m
 */


const wordRegex = /Jo+hn+/gi;
console.log(johnWick.match(wordRegex))
console.log()

const fileNames = [
    "image.jpg",
    "image.jpeg",
    "upper.JPEG",
    "image.png",
    "text.txt",
    "word.doc",
    "excel.csv",
    "presentation.ppt",
    "upper.JPG",
]

const regexOr = /\.(jpg|jpeg)/gi
console.log(fileNames.filter(it => it.match(regexOr)))

const regexResumed = /\.(jpe?g)/gi
console.log(fileNames.filter(it => it.match(regexResumed)))
