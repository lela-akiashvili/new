const words = [
  {
    word: "SUNLIGHT",
    hint: "light from the sun",
  },
  {
    word: "MOON",
    hint: "revolves around the earth",
  },
  {
    word: "EARTH",
    hint: "our planet",
  },
  {
    word: "MERCURY",
    hint: "first planet in solar system",
  },
  { word: "RYUK", hint: "who killed kira?" },
  {
    word: "NO",
    hint: "has Ritsu confessed to Takano-san yet?",
  },
];
// random
let random = Math.floor(Math.random() * words.length);
let hiddenword = words[random].word;
console.log(hiddenword);
let hiddenwordArray = hiddenword.split("").fill("_");

document.querySelector(".word").innerHTML = hiddenwordArray.join("");

document.querySelector(".hint").innerHTML = `HINT: ${words[random].hint}`;

let mistake = 0;

let src = document.getElementById("img-div");
let img = document.createElement("img");
src.innerHTML = "";

function check(letter) {
  let button = letter.value;
  if (hiddenword.includes(button)) {
    hiddenwordArray = hiddenwordArray.map((char, index) => {
      if (hiddenword[index] === button) {
        return button;
      } else {
        return char;
      }
    });
    document.querySelector(".word").innerHTML = hiddenwordArray.join("");
    console.log(hiddenwordArray);
    if (hiddenwordArray.every((item) => item !== "_")) {
      document.querySelector(".won").style.visibility = "visible";
      endGame();
      return;
    }
  } else {
    mistake++;

    img.src = `hangman_img/mistake ${mistake}.png`;
    src.appendChild(img);
    if (mistake <= 5) {
      document.querySelector(
        ".mistakes"
      ).innerHTML = `mistakes you made ${mistake}/6`;
    } else {
      document.querySelector(
        ".mistakes"
      ).innerHTML = `mistakes you made ${mistake}/6`;
      document.querySelector(".lost").style.visibility = "visible";
      document.querySelector(
        ".correct-answer"
      ).innerHTML = `correct answer was - ${hiddenword}`;
      endGame();
      return;
    }
  }
}
function disable(me) {
  me.disabled = true;
}
function endGame() {
  document.querySelector("body").style.backgroundColor = "rgb(240, 231, 240)";
}
