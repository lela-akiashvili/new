let storedWords = localStorage.getItem("languages");

let languages = storedWords
  ? JSON.parse(storedWords)
  : [
      ["hello", "goodbye", "good", "it's a bad weather outside"],
      ["გამარჯობა", "ნახვამდის", "კარგი", "გარეთ ცუდი ამინდია"],
      ["holla", "adios", "bueno", "malo"],
      ["hallo", "tschuss", "gut", "schlecht"],
    ];

// localStorage.clear();

let toTranslateTextarea = document.getElementById("totranslate");
let translatedTextarea = document.getElementById("translated");
let language = document.getElementById("language");
let secondlanguage = document.getElementById("language2");

language.addEventListener("change", function () {
  let selectedlanguage = language.value;
  updateTranslation();
});

secondlanguage.addEventListener("change", function () {
  let secondselectedlanguage = secondlanguage.value;
  updateTranslation();
});

toTranslateTextarea.addEventListener("input", function () {
  let totranslate = toTranslateTextarea.value;
  updateTranslation();
});

let newLanguage = document.getElementById("new-language");
let newSecondLanguage = document.getElementById("new-language2");

newLanguage.addEventListener("change", function () {
  updateTranslation();
});

newSecondLanguage.addEventListener("change", function () {
  updateTranslation();
});

function updateTranslation() {
  let selectedlanguage = language.value;
  let secondselectedlanguage = secondlanguage.value;
  let totranslate = toTranslateTextarea.value.toLowerCase();
  if (languages[selectedlanguage].includes(totranslate)) {
    let indexInSubArray = languages[selectedlanguage].indexOf(totranslate);
    translatedTextarea.value =
      languages[secondselectedlanguage][indexInSubArray];
    console.log(true);
  } else {
    translatedTextarea.value = "No translation for that word";
  }
}

function showAddForm() {
  document.querySelector("#newword").style.visibility = "visible";
}

function add() {
  let sourceLanguageIndex = newLanguage.value;
  let targetLanguageIndex = newSecondLanguage.value;
  let sourceWord = document.getElementById("new-word").value.trim();
  let targetWord = document.getElementById("meaning").value.trim();

  let addButton = document.querySelector("button");
  let warningElement = document.querySelector(".warning");

  warningElement.innerHTML = "";
  addButton.disabled = false;

  if (!sourceWord || !targetWord) {
    warningElement.innerHTML = "Please fill in all the fields.";
    addButton.disabled = true;
    return;
  }

  if (sourceWord === targetWord) {
    warningElement.innerHTML =
      "The new word and its meaning cannot be the same.";
    addButton.disabled = true;
    return;
  }

  let SourceWordExists = languages[sourceLanguageIndex].includes(sourceWord);
  let TargetWordExists = languages[targetLanguageIndex].includes(targetWord);

  if (SourceWordExists && TargetWordExists) {
    warningElement.innerHTML = `"${sourceWord}" and its meaning already exist.`;
    addButton.disabled = true;
    return;
  } else if (SourceWordExists) {
    warningElement.innerHTML = `"${sourceWord}" already exists in the source language. we will only add "${targetWord}"`;
    languages[targetLanguageIndex].push(targetWord);
  } else if (TargetWordExists) {
    warningElement.innerHTML = `Its meaning "${targetWord}" already exists in the target language.
    we will only add "${sourceWord}"`;
    languages[sourceLanguageIndex].push(sourceWord);
  }

  languages[sourceLanguageIndex].push(sourceWord);
  languages[targetLanguageIndex].push(targetWord);

  localStorage.setItem("languages", JSON.stringify(languages));

  document.getElementById("new-word").value = "";
  document.getElementById("meaning").value = "";
  warningElement.innerHTML = "Word added successfully!";
  warningElement.style.color = "green";
}
function hide() {
  document.querySelector("#newword").style.visibility = "";
}
console.log(languages);
