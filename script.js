const display = document.getElementById("calculator-display");
const operator = ["+", "-", "×", "÷"];
const inputLink = document.getElementById("inputLink");
const submitLink = document.getElementById("submitLink");
const inputSC = document.getElementById("inputSC");
const submitSC = document.getElementById("submitSC");
let linkValue = "";
let secretCd = "";
// console.log(secretCd);

// button link input
submitLink.addEventListener("click", function () {
  linkValue = inputLink.value;
  console.log(linkValue);
});

// button SC input 
submitSC.addEventListener("click", function () {
  secretCd = inputSC.value;
  console.log(secretCd);
});

// calculator at its finest
function press(val) {
  const lastChar = display.value.slice(-1);
  if (operator.includes(val)) {
    if (operator.includes(lastChar) || display.value === "") {
      return;
    }
  }
  display.value += val;
}

// clear function
function clearDisplay() {
  display.value = "";
}

let result = display.value;

function calculate() {
  try {
  let expression = display.value.replace(/×/g, "*").replace(/÷/, "/");
  display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
 
  result = display.value
  console.log(result)
  if (result === secretCd) {
    window.open(inputLink.value);
  }
}