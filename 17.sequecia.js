import { question } from "readline-sync";

function main(){
    const n = Number(question('Digite um número: '))

    let contador = 1
    let r = 0
    while(contador <= n){
        r = 1/contador
        contador++
        
    }
    console.log(r.toFixed(2))
}

main()