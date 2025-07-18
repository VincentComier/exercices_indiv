//j'ai été enormement aidé de chatgpt , j'ai presque rien compris
function isValidDate(dateString) {
    let [d, m, y] = dateString.split("/");
    let date = new Date(`${y}-${m}-${d}`);

    return (
        date.getFullYear() == y &&
        date.getMonth() + 1 == m &&
        date.getDate() == d
    );
}
console.log(isValidDate("03/04/2001"));
console.log(isValidDate("31/11/2020"));
console.log(isValidDate("29/02/2024"));
console.log(isValidDate("29/02/2023"));
console.log(isValidDate("03/14/2001"));

function isPalindrome(dateStr) {
    if (!isValidDate(dateStr)) 
        return false;
    let cleaned = dateStr.replace(/\//g, "");
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed
}
console.log(isPalindrome("11/02/2011"));
console.log(isPalindrome("03/04/2001"));
console.log(isPalindrome("02/02/2020"));
console.log(isPalindrome("31/11/2020"));

function formatDate(date) {
    let day = String(date.getDate()).padStart(2, "0")
    let month = String(date.getMonth() +1).padStart(2, "0")
    let year = date.getFullYear()
    return `${day}/${month}/${year}`
}
function getNextPalindromes(x) {
    let result = []
    let currentDate = new Date()

    while (result.length < x) {
        let formatted = formatDate(currentDate)
        if (isPalindrome(formatted)) {
            result.push(formatted)
        }
        currentDate.setDate(currentDate.getDate() +1)
    }
    return result
}

console.log(getNextPalindromes(8));