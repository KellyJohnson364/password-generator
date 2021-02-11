// Charactertype options
let special = [" ", "!", "\"", "#", "$", "%", "\&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">",
 "?", "@", "\\", "^", "_", "`", "\[", "{", "\]", "|", "}", "~"];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let arrayFull
let character
let Final=[]
let passWord=[]
let countInput

let getStarted = function() {
    

   
    let U =confirm("Would you like uppercase characters? \n (select 'cancel' if no)");
    let L =confirm("Lowercase?");
    let N =confirm("Number?");
    let S =confirm("Special?");
   
    if (U&&L&&N&&S) {
       arrayFull= upper.concat(lower, number, special);
    }
    else if (U&&L&&N) {
       arrayFull= upper.concat(lower, number);
    }
    else if (U&&L&&S) {
        arrayFull= upper.concat(lower, special);
    }
    else if (L&&N&&S) {
        arrayFull=lower.concat(number, special);
    }
    else if (U&&N&&S) {
        arrayFull=upper.concat(number, special);
    }
    else if (U&&L) {
       arrayFull= upper.concat(lower);
    }
    else if (L&&S) {
        arrayFull=lower.concat(special);
    }
    else if (L&&N) {
       arrayFull=lower.concat(number);
    }
    else if (N&&S) {
       arrayFull=number.concat(special);
    }
    else if (U&&S) {
       arrayFull=upper.concat(special);  
    }
    else if (U&&N) {
        arrayFull=upper.concat(number);
    }
    else if (N) {
        arrayFull=number;
    }
    else if (S) {
        arrayFull=special;
    }
    else if (L) {
        arrayFull=lower;
    }
    else if (U) {
        arrayFull= upper;
    }

    countInput = window.prompt("Number of characters (8-128)", "8");
    

    for (let i = 0;  i < countInput; ++i) {
        index = Math.floor(Math.random() * arrayFull.length);
        let character = arrayFull[index];
        passWord.push(character);
    }
    alert(passWord.join(" "));

    location.reload();

}
