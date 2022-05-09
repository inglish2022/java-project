// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {


  // Character Arrays
  var numbersChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialChar = ['!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '/', '.', ',', '<', '>', '?'];

  var resultArray = [];
  var userArray = [];


  //Window alerts/prompts/confirms to collect data
  var passwordLength = prompt("How many charactors would you like your password?");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must between 8-128 charactors.");
    return
  } else {

    var Number = confirm("Would you like numbers in your password?");
    var capital = confirm("Do you want uppercase letters in your password?");
    var special = confirm("Would you like special charactors in your password?");
    var smallCase = confirm("Would you like lowercase letters in your password?");

  }

  if (Number === false && capital === false && special === false && smallCase === false) {
    choices = window.alert('YOU MUST CHOOSE AT LEAST ONE CRITERIA!');
  }

  if (Number === true) {
    resultArray = resultArray.concat(numbersChar);

  } else if (Number === false) {
    ""
  }

  if (capital === true) {
    resultArray = resultArray.concat(upperCase);

  } else if (capital === false) {
    ""
  }

  if (smallCase === true) {
    resultArray = resultArray.concat(lowerCase);

  } else if (smallCase === false) {
    ""
  }

  if (special === true) {
    resultArray = resultArray.concat(specialChar);
  } else if (special === false) {
    ""
  }
  {

  }

  for (var i = 0; i < passwordLength; i++) {

    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }

  return userArray.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
