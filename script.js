let display = document.querySelector('.input');
let numberPress = document.querySelectorAll('.number');
let operationPress = document.querySelectorAll('.operation');
let equalPress = document.querySelector('.equal');
let clearPress = document.querySelector('.clear');
let restartPress = document.querySelector('.restart');

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = null;
let dotPresent = false;


numberPress.forEach(number => {
    number.addEventListener("click", (e) => {
      if (e.target.innerText === "." && !dotPresent) {
        dotPresent = true;
      } else if (e.target.innerText === "." && dotPresent) {
        return;
      }
      secondNumber += e.target.innerText;
      display.innerText = secondNumber;
    });
});

operationPress.forEach((operation) => {
    operation.addEventListener("click", (e) => {
      if (!secondNumber) return;
      dotPresent = false;
      const operationName = e.target.innerText;
      if (firstNumber && secondNumber && operator) {
        mathOperation();
      } else {
        result = parseFloat(secondNumber);
      }
      clearVar(operationName);
      operator = operationName;
    });
});


function clearVar(name = "") {
    firstNumber += secondNumber 
    display.innerText = firstNumber;
    secondNumber = "";
    display.innerText = result;
}

function mathOperation() {
    if (operator === "x") {
      result = parseFloat(result) * parseFloat(secondNumber);
    } else if (operator === "+") {
      result = parseFloat(result) + parseFloat(secondNumber);
    } else if (operator === "-") {
      result = parseFloat(result) - parseFloat(secondNumber);
    } else if (operator === "/") {
        if (secondNumber === "0") {
            result = "No Bro!!"
        }else{
      result = parseFloat(result) / parseFloat(secondNumber);
        }
    } 
}

equalPress.addEventListener("click", () => {
    if (!secondNumber || !firstNumber) return;
    dotPresent = false;
    mathOperation();
    clearVar();
    display.innerText = result;
    secondNumber = result;
    firstNumber = "";
});
  
clearPress.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    display.innerText = "";
    result = "";
});
  
restartPress.addEventListener("click", () => {
    display.innerText = "";
    secondNumber = "";
});


window.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      clickButtonEl(e.key);
    } else if (e.key === "+" || e.key === "-" || e.key === "/") {
      clickOperation(e.key);
    } else if (e.key === "*") {
      clickOperation("x");
    } else if (e.key == "Enter" || e.key === "=") {
      clickEqual();
    }
    // console.log(e.key)
});


function clickButtonEl(key) {
    numberPress.forEach((button) => {
      if (button.innerText === key) {
        button.click();
      }
    });
}


function clickOperation(key) {
    operationPress.forEach((operation) => {
      if (operation.innerText === key) {
        operation.click();
      }
    });
}


function clickEqual() {
    equalPress.click();
}


