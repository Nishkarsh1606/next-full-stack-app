const pattern = /\s/g
let string = 'url is good'
let urlTitle = string.replace(pattern, "-")
console.log(urlTitle)