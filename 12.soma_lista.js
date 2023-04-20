import { question } from "readline-sync";

//12.Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

function main(){
    const n = Number(question('Digite um número: '))
    let contador = 0
    let soma = 0
    let media = 0
    while (contador < n){
        const numero = Number(question('Digite um número: '))
        soma = numero + soma
        contador++
    }

    media = soma / n
    console.log(`A soma é a igual a ${soma}.`)
    console.log(`A media é a igual a ${media}.`)
}

main()