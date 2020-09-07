const myHtml = '<p>Hello world</p> <span>Hello again</span>'

console.log(myHtml.match(/<.+>.+<\/.+>/g)) //greedy
console.log(myHtml.match(/<.+?>.+?<\/.+?>/g)) //non-greedy


const regex = /((25[0-5]|2[0-4]\d|1\d{2}|\d\d?)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|\d\d?)/g

for(let i = 0; i < 301; i++) {
    const ip = `${i}.${i}.${i}.${i}`
    console.log(ip, ip.match(regex))
}