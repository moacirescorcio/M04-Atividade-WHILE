import { question } from "readline-sync";

//2. Leia N e escreva todos os números inteiros pares de 1 a N.

function main(){
    const n = Number(question('Digite um número: '))

    let contagem = 0
    while (contagem <= n){
        if (contagem % 2 == 0){
            console.log(contagem)
        }
        
        contagem += 1
    }
}


main()