import { question } from "readline-sync";

//13.Leia N e uma lista de N números e escreva o maior número da lista.


function main(){
    const n = Number(question('Digite um número: '))
    let contador = 0
    let maior = 0
    while (contador < n){
        
        const numero = Number(question('Digite um número: '))
        if (numero > maior){
            maior = numero
        }
        contador++
    }

    console.log(`O maior número digitado foi ${maior}`)


}

main()