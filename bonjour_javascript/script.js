let firstName = prompt("donne ton prenom")
function sayHello(hour) {
    let message = "Bonjour!"
    if (hour >= 18) {
        message = "Bonsoir!"
    }
document.querySelector('h1').innerText = message + firstName;
}
sayHello(11)
sayHello(18)
sayHello(17)