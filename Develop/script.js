// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var generatedPassword = "";
  var length = Number(prompt("Enter password length as a number: Between 8 and 128"));

  //handle proper length range required
  while(length < 8 || length > 128) {
    var length = Number(prompt("Previous entry is invalid, please enter a number between 8 and 128 inclusive"));
  }

  var lowercase = confirm("Click Ok if you want lowercase letters, cancel if not");
  var uppercase = confirm("Click Ok if you want UPPERCASE letters, cancel if not");
  var numeric = confirm("Click Ok if you want digits, cancel if not");
  var specialCharacters = confirm("Click Ok if you want special characters, cancel if not");

  //handle case if all false
  while((lowercase || uppercase || numeric || specialCharacters) == false) {
    alert("Please select at least one requirement other than length");
    lowercase = confirm("Click Ok if you want lowercase letters, cancel if not");
    uppercase = confirm("Click Ok if you want UPPERCASE letters, cancel if not");
    numeric = confirm("Click Ok if you want digits, cancel if not");
    specialCharacters = confirm("Click Ok if you want special characters, cancel if not");
  }

  var possibileDigits = "0123456789";
  var possibleLowerAlphas = "abcdefghijklmnopqrstuvwxyz";
  var possibleUpperAlphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var possibleSpecialChars = "~!@#$%^&*()_+-=[]{}|;:,./<>?";
  var totalPossibleCharacters = "";

  if(lowercase == true) {
    totalPossibleCharacters += possibleLowerAlphas;
  }

  if(uppercase == true) {
    totalPossibleCharacters += possibleUpperAlphas;
  }

  if(numeric == true){
    totalPossibleCharacters += possibileDigits;
  }

  if(specialCharacters == true) {
    totalPossibleCharacters += possibleSpecialChars;
  }

  for(var i = 0; i <= length; i++){
    var random = Math.floor(Math.random() * totalPossibleCharacters.length);
    generatedPassword += totalPossibleCharacters.substring(random, random + 1);
  }

  return generatedPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);