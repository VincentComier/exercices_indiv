const obj = {
  "candidate": "Le Filip",
  "age": 29,
  "city": "Paris",
  "region": "Île-de-France"
}

const data = [
	{
		"candidate": "Afrodite Amour",
		"age": 27,
		"city": "Lyon",
		"region": "Auvergne-Rhône-Alpes"
	},
	{
		"candidate": "Edeha Noire",
		"age": 34,
		"city": "Lyon",
		"region": "Auvergne-Rhône-Alpes"
	},
	{
		"candidate": "Le Filip",
		"age": 29,
		"city": "Paris",
		"region": "Île-de-France"
	}
]

//Récupère dans l’objet obj uniquement le nom de la candidate pour l’afficher dans la console Résultat attendu :

console.log(obj.candidate)

//Parcours le tableau d’objets data pour afficher dans la console la liste de tous les noms des candidates. Résultat attendu :
for (item of data) {
    console.log(item.candidate)
}