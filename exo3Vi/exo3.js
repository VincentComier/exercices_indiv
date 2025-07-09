//Nous souhaitons créer un décompte.
//Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
//Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).
// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.
let nombre = prompt("Entre un nombre entre 0 et 10");

if (nombre >= 0 && nombre <= 10) {
    for (let i = nombre; i >= 0; i--) {
        console.log(i);
        prompt(i)
    }
} else {
    alert("Erreur : tu dois entrer un nombre entre 0 et 10");
}

//j'ai pas bien comrpis ou affiché le 4,3,2,1,0 a part dans la console donc j'ai fait un prompt et la console