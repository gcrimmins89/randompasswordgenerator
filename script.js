// click generate password button
// two random passwords are displayed in the two buttons below
// create an array with all the keys on the keyboard
// create a function that picks 12 random characters from the array
// have the function pass the text.content into the buttons

// to go through the character set and pick out a random character
// loop this behaviour until a new character has been chosen for each

let create = document.querySelector('#create-El')
let generated1 = document.querySelector("#generated1")
let generated2 = document.querySelector('#generated2')

// create a function that takes 3 random symbols 3 random letters and 3 random numbers


const characterSets = {
    letters:    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", // Lowercase letters
    numbers:    "0123456789",                 // Numbers
    symbols:    "!@#$%^&*()_+[]{}|;:',.<>?/`~" // Symbols
};

// for loop
function getRandomCharacter(source) {
    const randomIndex = Math.floor(Math.random() * source.length);
    return source[randomIndex];
}

function passwordGenerator() {
    let password = "";
    //add 3 letters
    for(let i = 0; i < 3; i++) {
        password += getRandomCharacter(characterSets.letters)
    }
    //add 3 symbols
    for(let i = 0; i < 3; i++) {
        password += getRandomCharacter(characterSets.symbols)
    }
    //add 3 numbers
    for (let i = 0; i < 3; i++) {
        password += getRandomCharacter(characterSets.numbers)
    }
    return password.split('').sort(() => Math.random() - 0.5).join('');
}

create.addEventListener("click", function(){
    console.log('this button was clicked')
    generated1.textContent = passwordGenerator()
    generated2.textContent = passwordGenerator()
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Copied to clipboard:", text);
                alert("Password copied to clipboard");
        })

        .catch(err => {
            console.log("Failed to copy: ", err)
        });
}

generated1.addEventListener("click", function() {
    copyToClipboard(generated1.textContent);
}) 
generated2.addEventListener("click", function(){
    copyToClipboard(generated2.textContent);
})

console.log(characterSets[0])