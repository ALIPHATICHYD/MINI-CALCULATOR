const firstNum = document.getElementById('1st');

const secondNum = document.getElementById('2nd');

const multiplyBtn = document.getElementById('multiply');

const divideBtn = document.getElementById('divide');

const resultOut = document.getElementById('ans')

//Calculate Program
//Multiplication
const calculateMultiplication = () =>{
   const multiply = firstNum.value * secondNum.value
    resultOut.innerHTML = `${multiply}`
}   
