const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);
// write your code bellow
// Pour commencer, affiche dans ta console le type de data pour vérifier qu’il corresponde bien au type object et non string

console.log(typeof(data))
//Affiche dans la console, le premier objet du tableau d’objets
console.log(data[0])
// Affiche dans la console, le nombre d’objects contenu dans le tableau
console.log(data.length)
//Affiche dans la console, les informations de la candidate arrivée au 4e rang

for (let item of data) {
    if (item.ranking === 4)
    console.log("c'est le ranking:" ,item)
}
//Affiche dans la console, l’âge moyen des candidates
let age = 0
for (let moyenne of data) {
    console.log(moyenne.age)
age += moyenne.age
    // let zzz = moyenne.age
    // console.log(zzz / 10)
}
console.log(age / data.length)