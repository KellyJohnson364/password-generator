// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  // Strings of possible character choices
  
      let stringSpecial = ("!#$%&()*+-/:;<=>?@\[^_{|}~];")
      let stringUpper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      let stringLower = ("abcdefghijklmnopqrstuvwxyz");
      let stringNumber = ("12345678901234567890123456");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {

      
  // Collection of character choice from the user using confirm 
  
      let inputUpper =confirm("Would you like uppercase characters? \n 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'\n(select 'cancel' if no)");
      let inputLower =confirm("Would you like lowercase characters? \n 'abcdefghijklmnopqrstuvwxyz'\n(select 'cancel' if no)");   
      let inputNumber =confirm("Would you like number characters? \n '1234567890'\n(select 'cancel' if no)");
      let inputSpecial =confirm("Would you like special characters? \n '!#$%&()*+-/:;<=>?@\[^_{|}~];'\n(select 'cancel' if no)");
  
      // Combining of all selected characters into one string  
  
      let stringFull=""
  
      if (inputUpper) {
         stringFull += stringUpper;
      }
      if (inputLower) {
          stringFull += stringLower;
      }
      if (inputNumber) {
          stringFull += stringNumber;
      }
      if (inputSpecial) {
          stringFull += stringSpecial;
      }
      if (!stringFull) {
      alert("Please select at least one character type");
      writePassword();
      }
  // Collection of password length from user and validation of range
      
      let countInput = window.prompt("Number of characters (8-128)", "8");
          if (countInput < 8 || countInput > 128) {
              alert("Value should be between 8 - 128");
              countInput = window.prompt("Number of characters (8-128)", "8");
          }
  
  // Selection of password characters from full string using random selection.
  // For loop is used to generate characters that are added into the password string until desired length is acheived.
      
      let character 
     let passWord= ''
     
  
      for (let i = 0;  i < countInput; ++i) {
          index = Math.floor(Math.random() * stringFull.length);
          character = stringFull[index];
          passWord += character;
      }
  


   return passWord;
    }