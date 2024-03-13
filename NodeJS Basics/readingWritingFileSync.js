// Reading and writing to a file

const readline = require('readline');
const fs = require('fs');

let textIn = fs.readFileSync('./File/input.txt', 'utf-8');
console.log(textIn)

let content = 'In the eight Harry Potter films screened from 2001 to 2011, Harry Potter was portrayed by British actor Daniel Radcliffe. Radcliffe was asked to audition for the role of Harry in 2000 by producer David Heyman, while in attendance at a play titled Stones in His Pockets in London'
fs.writeFileSync('./File/output.txt', content)