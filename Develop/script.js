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
  var length = prompt("Enter password length as a number: Between 8 and 128");
  var lowercase = confirm("Click Ok if you want lowercase letters, cancel if not");
  var uppercase = confirm("Click Ok if you want UPPERCASE letters, cancel if not");
  var numeric = confirm("Click Ok if you want digits, cancel if not");
  var specialCharacters = confirm("Click Ok if you want special characters, cancel if not");

console.log(length);
console.log(lowercase);
console.log(uppercase);
console.log(numeric);
console.log(specialCharacters);



  return "HELLOOOOO";
}

console.log();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//criteria
//length 8 - 128 chars
//lowercase, uppercase, numeric, special chars
// 1 prompt for each
//at least one character type should be selected
//generate password after all prompts answered
//password then displayed in an alert or on the page itself
