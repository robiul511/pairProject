const fs = require('fs')

let num = 50
let studentsLength = 20
let tutorLenght = 3

let output = []
for (let i = 0; i < num; i++) {
  let obj = {
    StudentId: Math.ceil(Math.random()*studentsLength),
    TutorId: Math.ceil(Math.random()*tutorLenght)
  }
  output.push(obj)
}

// console.log(output);
output = JSON.stringify(output, null, 2)
fs.writeFileSync('./assets/associations.json', output)