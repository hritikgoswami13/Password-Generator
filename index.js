const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnEl = document.getElementById("btn-pass");
let displayOne = document.getElementById("pass-1")
let displayTwo = document.getElementById("pass-2")
let passwordLength = 12;

// generating random charectors

function getRandomCharacter(){
    randomNo = Math.trunc(Math.random()*characters.length);
    randomNo2 = Math.trunc(Math.random()*characters.length);
    let char1 = characters[randomNo];
    let char2 = characters[randomNo2];

    let arr = [char1, char2];
    return arr;
 }; 
// generate random password

function generateRandomPassword () {
    let randomPassword1 = "";
    let randomPassword2 = "";
    
    for(let i=0; i<passwordLength; i++){
        randomPassword1 += getRandomCharacter()[0];
        randomPassword2 += getRandomCharacter()[1];
    };
    let newArr = [randomPassword1, randomPassword2]

    return newArr;
};
// generatedPasswordOne
btnEl.addEventListener("click", ()=> {
    const generatedPasswordOne = generateRandomPassword()[0];
    const generatedPasswordTwo = generateRandomPassword()[1];
    displayOne.textContent = generatedPasswordOne;
    displayTwo.textContent = generatedPasswordTwo;
});
