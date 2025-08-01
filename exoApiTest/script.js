async function fetchLOTR() {
    const character = await fetch("https://the-one-api.dev/v2/character", {
        headers: { Authorization: 'Bearer GVeTGNvHZopfMwTwXkwl' }
    })
    const personnages = await character.json()
    console.log(personnages)

    for (let data of personnages.docs) {
        // console.("TEST :" , data)
        createPersonnage(data);
    }
}

function createPersonnage(item) {
    // for (let item of personnages) {
        console.log("MAXI TEST:", item)
        let chargement = document.getElementById("chargement")
        chargement.innerText = "CHARGE"

        let crtDiv = document.createElement("div")
        let names = document.createElement("h2")
        let gender = document.createElement("p")
        let death = document.createElement("p")
        let wikiPlace = document.createElement("p")

        names.innerText = `nom : ${item.name}`
        gender.innerText = `Genre : ${item.gender}`
        death.innerText = item.death ? `Mort : ${item.death}` : "Aucune info sur sa mort"
        gender.innerText = `genre : ${item.gender}`

        if (item.wikiUrl) {
            wikiPlace.innerHTML += `<a href="${item.wikiUrl}">voici son wiki</a>`
        } else {
            wikiPlace.innerText = "il n'a pas de page wiki"
        }

        crtDiv.appendChild(names)
        crtDiv.appendChild(gender)
        crtDiv.appendChild(death)
        crtDiv.appendChild(wikiPlace)

        let pers = document.getElementById("character")
        pers.appendChild(crtDiv)

        console.log("GROTEST: ", item.wikiUrl)

        chargement.style.display = "none"
}
fetchLOTR()

// let test = document.getElementById("character")
// for (let char of personnagese) {
//     let crtDiv = document.createElement("div")
//     let title = document.createElement("h2")
//     title.innerText = char.name
//     crtDiv.appendChild(title)
//     test.appendChild(crtDiv)
//     console.log("TEST:" , char)
//     chargement.style.display = "none"

// for (let people of personnages) {
//     let crtDiv = document.createElement("div")
//     let name = document.createElement("h2")
//     name.innerText = people.titre
// }
//     }
// }
// fetchLOTR()

// function fetchWithThen() {
// fetch("https://the-one-api.dev/v2/character", {
// 	headers: {Authorization: 'Bearer GVeTGNvHZopfMwTwXkwl'}
// })
// 	.then(resp => {
// 		console.log("c'est resp:" , resp)
// 		return resp.json()
// 	})
// 	.then(json => {

// 		console.log(JSON.stringify(json))
// 	})
// }
// fetchWithThen()