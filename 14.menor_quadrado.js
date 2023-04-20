import { question } from "readline-sync";

//14. Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o maior quadrado menor que 38 é 36 (quadrado de 6).

function main(){
    const n = Number(question('Digite um número: '))

    let contador = n - 1
    while (contador > 0){
        if (eh_quadrado_perfeito(contador)){
            console.log(`o maior quadrado menor que ${n} é ${contador} `)
            break
        }
        contador--
    }
}

function eh_quadrado_perfeito(n){
    let raiz = Math.sqrt(n)
    if (raiz % 1 === 0 ){
        return true
    }
}

main()