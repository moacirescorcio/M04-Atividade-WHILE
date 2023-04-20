import { question } from "readline-sync";

//7. Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.

function main(){
    const n = Number(question('Digite um número: '))

    let contador = 0
    let soma = 0
    
    while (contador <= n){
        
        soma = contador + soma
        contador++

    }
    console.log(`O resultado é ${soma}.`)

}

main()