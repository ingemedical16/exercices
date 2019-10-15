function hachage(chaine){
     condensat=0
    for(let i=0;i<chaine.length; i++){
        condensat += c.charCodeAt(i)* 100**(i+1)   
     }
    
    return condensat
}

console.log(hachage(process.argv[2]))