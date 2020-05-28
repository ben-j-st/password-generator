// code to separate strings into arrays 
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var symbol = specialChar.split('');

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var lower = lowerCaseChar.split('')

var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upper = upperCaseChar.split('')

var numberString =  "0123456789";
var number = numberString.split('')

// log the split of strings into arrays
// console.log(special);
// console.log(upper);
// console.log(lower);
// console.log(number);



// variables for confirming check boxes
var lowerChecked = document.getElementById('includeLowercase');
var upperChecked = document.getElementById('includeUppercase');
var numberChecked = document.getElementById('includeNumbers');
var symbolChecked = document.getElementById('includeSymbols');

// variable for password generating btn 
var generateBtn = document.getElementById("generate")

// variable for accessing text box
var passwordArea = document.getElementById('password')

// array variables 
var completeArray = []
var passArray = [];

// logging check box values
function consoleLogChecked() {
console.log("Lower Character Checkbox " + lowerChecked.checked);
console.log("Upper Character Checkbox " + upperChecked.checked);
console.log("Number Checkbox " + numberChecked.checked);
console.log("Symbol Checkbox " + symbolChecked.checked);
}

// Event Listeners for checkboxes runs consolLogChecked
lowerChecked.addEventListener('input', consoleLogChecked);
upperChecked.addEventListener('input', consoleLogChecked);
numberChecked.addEventListener('input', consoleLogChecked);
symbolChecked.addEventListener('input', consoleLogChecked);

// declaring a variable to be used to get the current information on text or slider
var characterRange = document.getElementById('characterAmountRange');
var characterNumber = document.getElementById('characterAmountNumber');

// run function each time an input is recorded 
characterRange.addEventListener('input', syncCharacterAmount);
characterNumber.addEventListener('input', syncCharacterAmount);


// function for synching range and text field 
function syncCharacterAmount(i) {
    var value = i.target.value
    characterNumber.value = value
    characterRange.value = value
}

console.log(characterNumber.value)

// code for logging when the button is pressed 
generateBtn.addEventListener("click", check);

// test variable for counting when button clicked and changing the value of the text area
// var test = 1;

// var password = "ive Changed the text area ";


//  check if checkboxes have been ticked 
function check() {
    if ((lowerChecked.checked === false) &&
    (upperChecked.checked === false) &&
    (numberChecked.checked === false) &&
    (symbolChecked.checked === false)
    ) { 
        alert("You must first select at least one checkbox");
    } else {
        // compiles the array
        compileArray();
        // generates a password      
        generatePassword();
    }
  }

function compileArray() {
    // Checks for if just lower is ticked 
    if((lowerChecked.checked === true)){
        completeArray = lower
    }
    // checks for lower and upper
    else if ((lowerChecked.checked === true) && (upperChecked.checked === true)) {
        completeArray = lower.concat(upper)
        console.log("lower Checked.checked & upperChecked.checked is true")
    } 
    // checks for lower and number
    else if ((lowerChecked.checked === true) && (numberChecked.checked === true)) {
        completeArray = lower.concat(number)
    }
    // checks for lower and symbols
    else if ((lowerChecked.checked === true) && (symbolChecked.checked === true)) {
        completeArray = lower.concat(symbol)
    }

    else if ((lowerChecked.checked === true) && 
    (upperChecked.checked === true)
    (numberChecked.checked === true)) {
        completeArray = lower.concat(upper, number);
    }
}

function generatePassword() {
    for (var i = 0; i < characterNumber.value; i++) {
        passArray[i] = completeArray[Math.floor(Math.random()*(completeArray.length))];
        console.log(i)
   }
    // prints password to screen
    console.log(completeArray);
    
    console.log(passArray);
    
   printPassword();
//    resets complete Array
   completeArray = [];
}


function printPassword() {
    console.log("pushed the button")
    passwordArea.value = passArray.join('')
    // passwordArea.value = passArray.join('') + test++
}





