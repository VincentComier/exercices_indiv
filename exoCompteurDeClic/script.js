const counter = document.getElementById("counter")
const chiffre = document.getElementById("chiffre")

let count = 0

counter.addEventListener("click", () => {
    count++
    chiffre.textContent = count
})