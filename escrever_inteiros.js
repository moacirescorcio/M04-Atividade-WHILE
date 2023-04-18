import { question } from "readline-sync";

//1. Leia N e escreva todos os números inteiros de 1 a N.

function main(){
    const n = Number(question('Digite um número: '))

    let contagem = 0
    while (contagem <= n){
        console.log(contagem)
        contagem += 1
    }
}

main()