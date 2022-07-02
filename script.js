//Assigning ID's to their functions
//First Label
const firstNum = document.getElementById('1st');

//Second Label
const secondNum = document.getElementById('2nd');

//Multiply Button
const multiplyBtn = document.getElementById('multiply');

const divideBtn = document.getElementById('divide');

const resultOut = document.getElementById('ans')

//Calculate Program
//Multiplication
const calculateMultiplication = () =>{
   const multiply = firstNum.value * secondNum.value
    resultOut.innerHTML = `${multiply}`
}   

//Division
const calculateDivison = () => {
    const divide = firstNum.value / secondNum.value
    resultOut.innerHTML = `${divide}`
}

//Event Listeners
//Multiplication
multiplyBtn.addEventListener('click', calculateMultiplication)

calculateMultiplication();

divideBtn.addEventListener('click', calculateDivison);

calculateDivison();
