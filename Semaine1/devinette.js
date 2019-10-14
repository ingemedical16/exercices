const readline = require('readline') 
const rli = readline.createInterface({  
    input: process.stdin,  
    output: process.stdout }) 
    rli.on('line', (userinput) => { 
        if (userinput == solution){ 
               rli.close()
})