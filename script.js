const display = document.getElementById("calculator-display");
const operator = ["+", "-", "×", "÷"];
const inputLink = document.getElementById("inputLink");
const submitLink = document.getElementById("submitLink");
const inputSC = document.getElementById("inputSC");
const submitSC = document.getElementById("submitSC");
let linkValue = "";
let secretCd = "";
let clickCount = 0;

// container hidden
const containerInput = document.getElementById("containerInput");
const calculatorCon = document.getElementById("calculator-container");
document.body.addEventListener("click", function (event) {
  if (calculatorCon.contains(event.target) || containerInput.contains(event.target) || display.contains(event.target)) return;
  // increase click count
  clickCount++;
  // set display hidden if tap 3 times
  if (clickCount == 3) {
    containerInput.style.display = "block";
  }
  // hide and display it again
  if (clickCount == 6) {
    containerInput.style.display = "none";
    clickCount = 0
  }
});
// button link input
submitLink.addEventListener("click", function () {
  linkValue = inputLink.value.trim();
  if (!linkValue.startsWith("http://") && !linkValue.startsWith("https://")){
    linkValue = "https://" + linkValue
  }
});

// button SecretCode input
submitSC.addEventListener("click", function () {
  secretCd = inputSC.value;
  inputSC.value = "";
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

// calculate function
let result = "";
function calculate() {
  try {
    let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }

  result = display.value;
  if (result === secretCd) {
    window.open(linkValue);
  }
}
