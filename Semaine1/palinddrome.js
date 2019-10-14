





function palinddrome(chaine){
    for (let i=0 ;i < Math.floor(chaine.length/2);i++){
        console.log(i, chaine[i])
        if (chaine[i] != chaine[chaine.lenght-(i=1)]){
            return false

        }
    }
    return true
}

console.log(palinddrome("ANNA"))
console.log(palinddrome("ANkNA"))
console.log(palinddrome("ANkONA"))