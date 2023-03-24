let inputBox = document.getElementById("input-box");
let operator = "";
let num1 = 0;
let num2 = 0;
let result = 0;

function addNumber(num) {
  inputBox.value += num;
}

function addOperator(op) {
  num1 = parseInt(inputBox.value);
  inputBox.value = "";
  operator = op;
}

function clearInput() {
  inputBox.value = "";
  num1 = 0;
  num2 = 0;
  operator = "";
}

function calculate() {
  num2 = parseInt(inputBox.value);
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = 0;
      break;
  }

  inputBox.value = result;
  num1 = result;
  num2 = 0;
  operator = "";
}

// create buttons dynamically
let buttonContainer = document.getElementById("button-container");
let operations = ["-", "*", "C", "=", "/", "+"];

for (let i = 0; i < 10; i++) {
  let button = document.createElement("button");
  button.innerText = i;
  button.addEventListener("click", () => {
    addNumber(i);
  });
  buttonContainer.appendChild(button);
}
for (let i = 0; i < operations.length; i++) {
  let button = document.createElement("button");
  button.innerText = operations[i];
  button.addEventListener("click", () => {
    if (operations[i] === "=") {
      calculate();
    } else {
      addOperator(operations[i]);
    }
  });
  buttonContainer.appendChild(button);
}
