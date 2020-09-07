const { johnWick } = require("./baseText");

const wordRegex = /John|Derek/gi;
const sentenceRegex1 = /created by screenwriter Derek Kolstad/i;

const regexList = [wordRegex, sentenceRegex1]

regexList.forEach((rg, idx) => {
    console.log(`###################### Regex ${idx} ########################`)

    console.log(`${idx} - test: ${rg} = ${rg.test(johnWick)}`)
    console.log(`${idx} - match: ${johnWick.match(rg)}`)
    const exec = rg.exec(johnWick)
    if(exec) {
        console.log(`${idx} - exec [0]: ${rg} = ${exec[0]}`)
        console.log(`${idx} - exec index: ${rg} = ${exec.index}`)
        console.log(`${idx} - exec input: ${rg} = ${exec.input}`)
    }
})

console.log(johnWick.replace(/John|Derek/gi, input => input.toUpperCase()))
console.log('')
console.log(johnWick.replace(/John|Derek/gi, 'Demys'))

