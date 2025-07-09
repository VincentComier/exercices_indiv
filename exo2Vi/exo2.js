//Créer une variable appelé “message” de type string.
//5.Le tableau letters a maintenant changé.
let message = "";
let letters = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l']
// let letters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h'];
//Créer une boucle qui va parcourir le tableau letters (choisis la boucle de ton choix)
//Dans le code de la boucle, ajouter chaque élément du tableau letters à message.
for (let i = 0; i< letters.length; i++) {
    message += letters[i]
}
//Une fois la boucle terminée, afficher “message” dans la console.
console.log(message)
