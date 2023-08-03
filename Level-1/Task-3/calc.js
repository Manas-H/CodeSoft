let calculatorActive = false;

function toggleCalculator() {
  calculatorActive = !calculatorActive;
  const display = document.getElementById("display");
  
  if (calculatorActive) {
    display.removeAttribute("disabled");
    display.value = "0";
  } else {
    display.setAttribute("disabled", "disabled");
    display.value = "";
  }
}

function clearAllScreen() {
  document.getElementById("display").value = "";
}

function clearScreen() {
  const display = document.getElementById("display");
  const currentValue = display.value;
  if (currentValue.length > 0) {
    const newValue = currentValue.slice(0, -1);
    display.value = newValue;
  }
}

function display(value) {
  document.getElementById("display").value += value;
  if (calculatorActive) {
    display.value += value;
  }
}

function calculate() {
  var p = document.getElementById("display").value;
  var q = eval(p);
  document.getElementById("display").value = q;

  
  if (inputValue.includes("%")) {
    const parts = inputValue.split("%");
    if (parts.length === 2) {
      const number = parseFloat(parts[0]);
      const percentage = parseFloat(parts[1]);
      if (!isNaN(number) && !isNaN(percentage)) {
        const result = (number * percentage) / 100;
        display.value = result;
        currentInput = result.toString(); 
      } else {
        display.value = "Error";
      }
    } else {
      display.value = "Error";
    }
  }
}

function findSquareRoot() {
  const display = document.getElementById("display");
  const currentValue = parseFloat(display.value);

  const squareRoot = Math.sqrt(currentValue);
  display.value = squareRoot.toFixed(1);
}

