const fs = require('fs')

let maleNameArr = ['Bartolomeus', 'Delphito', 'Robiul', 'Tri', 'Alexander', 'Agung', 'Satriya', 'Hifzhan', 'Farhad', 'Wendy', 'Isro', 'Taufiq', 'Kemal']
let femaleNameArr = ['Ayu', 'Stefani', 'Kwan', 'Nadia', 'Riantini', 'Devita', 'Sari', 'Afifah']

let num = 20

let output = []
for (let i = 0; i < num ; i++) {
  let gender, firstName, lastName
  let isMale = Math.random()
  isMale < 0.5 ? gender = 'Male' : gender = 'Female'

  let modifier = Math.ceil(Math.pow(Math.random()+1,4))
  let age = Math.ceil(Math.random()*2)+2+modifier

  if (gender == 'Male') {
    firstName = Math.ceil(Math.random()*maleNameArr.length-1)
    lastName = Math.ceil(Math.random()*maleNameArr.length-1)

    firstName = maleNameArr[firstName]
    lastName = maleNameArr[lastName]
  }
  if (gender == 'Female') {
    firstName = Math.ceil(Math.random()*femaleNameArr.length-1)
    lastName = Math.ceil(Math.random()*femaleNameArr.length-1)

    firstName = femaleNameArr[firstName]
    lastName = femaleNameArr[lastName]
  }
  
  let obj = {
    name: firstName + ' ' + lastName,
    age: age,
    gender: gender
  }
  output.push(obj)
}

// console.log(output);
output = JSON.stringify(output, null, 2)
fs.writeFileSync('./assets/students.json', output)