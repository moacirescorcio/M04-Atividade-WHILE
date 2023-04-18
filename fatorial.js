import { question } from "readline-sync";

//5. Leia um número, calcule e escreva seu fatorial.

function main(){
    const n = Number(question('Digite um número: '))

    let contagem = 0
    let ant
    let resultado = 1
    while (contagem < n){
        ant = n - contagem
        resultado = resultado * ant

        contagem += 1
    }
    console.log(`${n} Fatorial é igual a: ${resultado}.`)
}

main()