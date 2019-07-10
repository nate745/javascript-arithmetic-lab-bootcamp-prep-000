function add (x, y){
  return x + y
}
function subtract (x, y){
  return x - y
}
function multiply (x, y){
  return x * y
}
function divide (x, y){
  return x / y
}


var number = 10

function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()
console.log(number)

add5()
console.log(number)


number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5
