import { question } from "readline-sync";

//1. Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus divisores. (flag número = 0).

function main(){
    console.log('----------Divisores-----------')
    let n = Number(question('Digite um número: '))

    if (n != 0){
        console.log(`Os divisores de ${n} são:`)
        eh_divisor(n)
    }else{
        console.log('Programa encerrado!')
    }
}

function eh_divisor(n){
    let divisor = n
    while (divisor > 0){
        if (n % divisor == 0){
            console.log(divisor)
        }
        divisor = divisor - 1
    }
}

main()