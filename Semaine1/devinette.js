const readline = require('readline') 
const rli = readline.createInterface({  
    input: process.stdin,  
    output: process.stdout }) 
    rli.on('line', (userinput) => { 
        if (userinput == solution){ 
               rli.close()
        }
})

let entree = -1  
let solution = Math.floor(Math.random()*100+1)  
while (entree != solution && entree != 0){
    entree =  window.prompt("Devinez le nombre entre 1 et 100") 
    if (entree < solution){ 
        console.log("C'est plus que ", entree)
    }  else if (entree > solution){ 
        console.log("C'est moins que ", entree)  
    }
} 
console.log("Vous avez gagné! la réponse était", solution)   
    