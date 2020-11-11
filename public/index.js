import { hello } from '/hello.js'

let greeting = hello()
console.log(greeting)

let main = document.getElementsByTagName('main')[0]
// hey yo
main.innerHTML = greeting
