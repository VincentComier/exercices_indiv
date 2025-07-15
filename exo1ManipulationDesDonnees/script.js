// Avec l’annexe ci-dessous :

     const candidates = ['Le Filip','Ruby On The Nail','Leona Winter','Lula Strega','Misty Phoenix',
       'Perseo','Norma Bell','Edeha Noire','Magnetica','Afrodite Amour'];

//     Accède au tableau pour afficher dans la console “Le Filip”
//     Accède au tableau pour afficher dans la console “Edeha Noire”
//     Parcours le tableau pour afficher dans la console ligne par ligne chaque nom des candidates
//     (Bonus) Parcours le tableau candidates pour afficher la liste des candidates dans une page HTML :

console.log("Accède au tableau pour afficher dans la console “Le Filip” :" ,candidates[0])
console.log("Accède au tableau pour afficher dans la console “Edeha Noire” :" ,candidates[7])

for (let item of candidates) {
    console.log(item)
}

for (let item of candidates) {
  console.log(item)
  document.querySelector("#tableau").innerHTML += `<li>${item}</li>`
}