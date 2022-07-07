//Assigning ID's to their functions

//First Label
const firstNum = document.getElementById('1st');

//Second Label
const secondNum = document.getElementById('2nd');

//Multiply Button
const multiplyBtn = document.getElementById('multiply');

//Divide Button
const divideBtn = document.getElementById('divide');

//Subtract Button
const subBtn = document.getElementById('sub');

//Result
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

//Subtract
const calculateSubtraction = () => {
    const Subtract = firstNum.value - secondNum.value
    resultOut.innerHTML = `${Subtract}`
}

//Event Listeners

//Multiplication
multiplyBtn.addEventListener('click', calculateMultiplication)

calculateMultiplication();

//Division
divideBtn.addEventListener('click', calculateDivison);

calculateDivison();

//Subtraction
subBtn.addEventListener('click', calculateSubtraction);

calculateSubtraction();
