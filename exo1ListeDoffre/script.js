// Pour ce premier exercice, tu peux reprendre la fonction fetchOffers() qu’on a créé plus haut. Le but de cet exercice va être de générer du HTML à partir de la donnée plutôt que faire un simple console.log().
async function fetchOffers() {
    const response = await fetch("https://codepassport.dev/api/offers")
    const offers = await response.json()
    console.log(offers)
    let offres = document.getElementById("offres")
    for (let item of offers) {
        let crtDiv = document.createElement("div")
        let title = document.createElement("h2")
        title.innerText = item.titre
        let description = document.createElement("p")
        description.innerText = item.description
        crtDiv.appendChild(title)
        crtDiv.appendChild(description)
        offres.appendChild(crtDiv)
    }
}
fetchOffers()
