import { question } from "readline-sync";

//6. Escreva a tabuada dos números de 1 a 10.

function main(){
    let contador = 1
    let n1 = 1
    let n2 = 1
    
    console.log(`---Tabuada do número ${n1}---`)
    
    while (contador <= 100){
        let r = n1 * n2

        console.log(`${n1} x ${n2} = ${r}`)
        n2 += 1
        if (n2 > 10){
            n1 += 1
            n2 = 1
            if (n1 < 11){
                console.log(`---Tabuada do número ${n1}---`)
            }
            
            
        }
        
        
        contador += 1
    }
}

main()