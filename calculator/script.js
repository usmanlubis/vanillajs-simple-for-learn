const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const mainDisplay = document.querySelector('.main-display');
const subDisplay = document.querySelector('.sub-display');

let operand1 = "";
let operand2 = "";
let operator = "";

function inputNumberHandler(ev){
  if (!operator){
    if (!operand1){
      operand1 = ev.target.getAttribute('aria-details');
      setMainDisplay(operand1);
      return;
    }
    operand1 += ev.target.getAttribute('aria-details');
    setMainDisplay(operand1);
    return;
  }

  if(operator){
    if(!operand2){
      operand2 = ev.target.getAttribute('aria-details');
      setMainDisplay(operand2);
      return;
    }
    operand2 += ev.target.getAttribute('aria-details');
    setMainDisplay(operand2);
    return;
  }
}

function clearHandler(){
  operand1 = "";
  operand2 = "";
  operator = "";
  result = "0";

  setMainDisplay(result);
  setSubDisplay();
  return;
}

function setMainDisplay(value){
  mainDisplay.textContent = value
}

function setSubDisplay(value){
  subDisplay.textContent = value;
  return;
}

function getResult(op1, op2, oper){
  op1 = Number(op1)
  op2 = Number(op2)
  result = "";

  switch(oper){
    case "+":
      result = op1 + op2;
      break;
    case "-":
      result = op1 - op2;
      break;
    case "*":
      result = op1 * op2;
      break;
    case "/":
      result = op1 / op2;
      break;
  }

  setMainDisplay(result);
  setSubDisplay("")
  operand1 = result;
  operand2 = "";
  operator = "";
  return;
}

function operatorHandler(ev){
  const operatorInput = ev.target.getAttribute('aria-details');
  let subDisplayValue = "";

  if (operatorInput === "="){
    if (operator){
      getResult(operand1, operand2, operator);
    }
    return;
  }

  operator = operatorInput
  subDisplayValue = operand1 + operator;
  setMainDisplay(0);
  setSubDisplay(subDisplayValue);
  return;
}

numbers.forEach(number => {
  number.addEventListener('click', inputNumberHandler);
})

clear.addEventListener('click', clearHandler);
operators.forEach(operatorInput => {
  operatorInput.addEventListener('click', operatorHandler);
})