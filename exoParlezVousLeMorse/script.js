import latinToMorse from './annexe1.js';
import morseToLatin from './annexe2.js';

let encodeBtn = document.getElementById("encodeBtn")
let decodeBtn = document.getElementById("decodeBtn")

let string = "hello, world"

function getLatinCharacterList (text) {
    return Array.from(text)
}

let result = getLatinCharacterList(string) //transforme la string"string" en tableau de lettres"
console.log(result)

function translateLatinCharacter(char) { //transforme en majuscule et en morse
    let majChar = char.toUpperCase();
    return latinToMorse[majChar]
}

let morseA = translateLatinCharacter("A");
console.log(morseA);

function encode(text) {
  let characters = getLatinCharacterList(text);
  let morseList = "";

  for (let i = 0; i < characters.length; i++) {
    let morseChar = translateLatinCharacter(characters[i]);
  if (morseChar) {
    morseList += morseChar + " " //on ajoute la trad et on met un espace
    } else {
      morseList += " " //si c'est undefined on met un espace
    }
  }
  return morseList
}

console.log(encode("il fait chaud"))

//______________________________________________

let morse = ".. .-.. / ..-. .- .. - / -.-. .... .- ..- -.."

function getMorseCharacterList (morseText) {
    return morseText.split(" ")
}
let morseResult = getMorseCharacterList(morse) 
console.log(morseResult)

function translateMorseCharacter(morseLetters) { 
  if (morseLetters === "/") {
    return " "
  }                                       // on cherche la lettre dans l'annexe
  return morseToLatin[morseLetters] || "" //si la lettre n'est pas trouvé on met "" (rien)
}
let Amorse = translateMorseCharacter(".-");
console.log(Amorse);

function decode(morseText) {
  let morse = getMorseCharacterList(morseText);
  let morseString = "";

  for (let i = 0; i < morse.length; i++) {
    morseString += translateMorseCharacter(morse[i])
  }
  return morseString
}

console.log(decode(".. .-.. / ..-. .- .. - / -.-. .... .- ..- -.."))

function submit(event) {
  event.preventDefault()
  let morseInput = document.getElementById("morseInput").value
  let textInput = document.getElementById("textInput").value
  let resultElement = document.getElementById("decrypter")

  if (textInput !== "") {
    resultElement.textContent = encode(textInput);
  } else if (morseInput !== "") {
    resultElement.textContent = decode(morseInput)
  } else {
    alert("il faut remplir")
  }
}

document.getElementById("traducteur").addEventListener("submit", submit);