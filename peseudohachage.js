const crypto = require("crypto")
function peseudohachage(chaine){
     condensat=0
    for(let i=0;i< chaine.length;i++){for(let i=0;i< chaine.length;i++){
        
        condensat =(condensat + c.charCodeAt(i)* 100**(i+1)) % (2**256)  
     }
    
        
        condensat =(condensat + c.charCodeAt(i)* 100**(i+1)) % (2**256)  
     }
    
    return condensat.toString(16)
}
function sha256(chaine){
    console.log(chaine)
    return crypto.createHash("sha256","hex").update(chaine).digest("hex")
}


console.log("condensat:",peseudohachage(process.argv[2]))
console.log(sha256(process.argv[2]))
data = Uint16Array.from([5])
console.log(sha256(data))
data2 = parseInt(process.argv[2],16)
console.log(data2)
console.log(sha256(Uint16Array.from([data2])))