let calculation = '';

function calc(add) {
  calculation += add;
  document.querySelector(".calc").innerHTML = calculation;
}

function evaluation() {
  try {
    document.querySelector(".calc").innerHTML = calculation = eval(calculation);
  } catch (error) {
    document.querySelector(".calc").innerHTML = "Error";
    return;
  }
}

function cl() {
  calculation = 0;
  document.querySelector(".calc").innerHTML = calculation;
}
