const { log } = require("console")

let data = []
for (let i = 0; i < 100; i++) {
  data.push(Math.ceil(Math.random()*10))
}
console.log(data);