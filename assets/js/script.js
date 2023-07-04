// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword () {
    var numberChars = "0123456789";
    var specialChars = "!@#$%^&*()";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

    var passwordLength;
    do {
        passwordLength = parseInt(prompt("Enter password length (8-128 characters):"));
    } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
    var password = "";

    var includeSpecialChars = confirm("Include special characters?");
    var includeNumbers = confirm("Include numbers?");
    var includeUppercase = confirm("Include uppercase letters?");

    var chars = lowercaseChars;
    if(includeSpecialChars) {
        chars += specialChars;
    }
    if (includeNumbers) {
        chars += numberChars;
    }
    if (includeUppercase) {
        chars += uppercaseChars
    }

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1 );
    }
    return password;
  }
  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);