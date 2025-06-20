function askNumber(){
    const choosenNbr = prompt("Choisis ton nombre entre 0 et 50");
    if (choosenNbr >= 0 && choosenNbr <= 50)
        return Number(choosenNbr)
    else
        return askNumber()
    }
function player2() {
    player2Number = prompt("Donne le nombre a deviner entre 0 et 50")
    if (player2Number >= 0 && player2Number <= 50)
        return Number(player2Number)
    else
        return player2()
}
function didIWin(userNumber, givenNumber) {
    return userNumber === givenNumber
}
function gamePlay() {
    let givenNumber = player2() 
    let hasWon = false
    while (!hasWon) {
        let userNumber = askNumber();
        hasWon = didIWin(userNumber, givenNumber);

        if (hasWon) {
            alert (`${userNumber} etait le bon nombre, bravo !`)
        } else if (userNumber > givenNumber) {
            alert (` c'est plus petit que ${userNumber}`)
        } else {
            alert (`c'est plus grand que ${userNumber}`)
        }
    }
}
gamePlay()