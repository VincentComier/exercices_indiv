function verifierPermis(prenom, age) {
    const ageLegal = 17
    if (age >= ageLegal) {
        console.log(`${prenom} est autorisé(e) à conduire.`)
    } else {
        console.log(`${prenom} n'est pas autorisé(e) à conduire.`)
    }
}

verifierPermis("Mathieu", 22)
verifierPermis("Léa", 15)
verifierPermis("Jean", 17)