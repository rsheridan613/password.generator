// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //resets values on button click
  newPassArr = [];
  passwordLength = 0;
  finalPasswordArr = [];

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//variables
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "*", "%"];
var passwordLength = 0;
var newPassArr = [];
var finalPasswordArr = [];

function generatePassword() {
  //length prompt
  var length = prompt("Please enter password length");
  if (length >= 8 && length <= 128) {
    passwordLength = length;
  } else {
    alert("Password must be between 8 and 128 charaters");
    generatePassword();
  }

  //lowercase prompt
  var isLowerCase = confirm("Do you want to add lower case characters?");
  if (isLowerCase) {
    lowerCaseGen();
  }

  //uppercase prompt
  var isUpperCase = confirm("Do you want to add upper case characters?");
  if (isUpperCase) {
    upperCaseGen();
  }

  //number prompt
  var isNumbers = confirm("Do you want to add numbers?");
  if (isNumbers) {
    numberGen();
  }

  //special prompt
  var isSpecial = confirm("Do you want to add special characters?");
  if (isSpecial) {
    specialGen();
  }

  //if no characters
  if (
    isLowerCase === false &&
    isUpperCase === false &&
    isNumbers === false &&
    isSpecial === false
  ) {
    alert("Password needs at least one character type");
    return;
  }

  // final password
  for (let i = 0; i < passwordLength; i++) {
    var indexValue = Math.floor(Math.random() * newPassArr.length);
    var index = newPassArr[indexValue];
    console.log(index);
    finalPasswordArr.push(index);
  }
  return finalPasswordArr.join("");
}

// adds characters to array
function lowerCaseGen() {
  for (let i = 0; i < lowerCaseArr.length; i++) {
    newPassArr.push(lowerCaseArr[i]);
  }
}

function upperCaseGen() {
  for (let i = 0; i < upperCaseArr.length; i++) {
    newPassArr.push(upperCaseArr[i]);
  }
}

function numberGen() {
  for (let i = 0; i < numbersArr.length; i++) {
    newPassArr.push(numbersArr[i]);
  }
}

function specialGen() {
  for (let i = 0; i < specialArr.length; i++) {
    newPassArr.push(specialArr[i]);
  }
}
