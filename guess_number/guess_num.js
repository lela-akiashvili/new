let random;
function randomNumGen() {
  const min = parseFloat(document.getElementById("min").value);
  const max = parseFloat(document.getElementById("max").value);
  let warning = document.querySelector(".ranges");

  if (!isNaN(min) && !isNaN(max)) {
    if (max <= min) {
      warning.innerHTML = `Max Should Be More Than ${min}`;
    } else {
      random = Math.floor(Math.random() * (max - min + 1)) + min;
      warning.innerHTML = "";
      console.log(random);
    }
  } else {
    warning.innerHTML = "Enter a Valid Min-Max Range";
  }
}

function input(id) {
  const pattern = /[^0-9]/;
  const inputValue = document.getElementById(id).value;

  if (pattern.test(inputValue)) {
    document.getElementById(id).style.border = "2px solid red";
  } else {
    document.getElementById(id).style.border = "";
  }
}

randomNumGen();
let tries = 0;
let guessed = localStorage.getItem("guessed") || 0;

function guessGame() {
  let guess = parseInt(document.querySelector(".num").value);

  if (isNaN(guess)) {
    document.querySelector(".hint").innerHTML =
      "Your Inputs Was Not a Number, Try Again";
    return;
  } else if (guess === random) {
    document.querySelector(".hint").innerHTML =
      "Congratulations You Guessed Correctly!";
    randomNumGen();
    guessed++;
    document.querySelector(".guesses").innerHTML = `guesses:${guessed}`;
    localStorage.setItem("guessed", guessed);
  } else {
    if (guess < random) {
      document.querySelector(".hint").innerHTML = "Wrong! Try Higher Number";
    } else if (guess > random) {
      document.querySelector(".hint").innerHTML = "Wrong! Try lower Number";
    }
  }
  tries++;
  document.querySelector(".tries").innerHTML = `tries:${tries}`;
}

function reset() {
  guessed = 0;
  tries = 0;
  document.querySelector(".num").value = "";
  document.querySelector(".hint").innerHTML = "";
  document.querySelector(".tries").innerHTML = "tries:0";
  document.querySelector(".guesses").innerHTML = "guesses:0";

  randomNumGen();
}
