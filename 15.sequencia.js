import { question } from "readline-sync";

//15. Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).

function main(){
    const n = Number(question('Digite um valor: '))

    let contador = 1
    let valor = 0
    while (contador <= n){
        
        valor = valor + contador
        contador++
        console.log(valor)
    }
}

main()