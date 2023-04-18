import { question } from "readline-sync";

//2. Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.

function main(){
    const n1 = Number(question('Primeiro número: '))
    const n2 = Number(question('Segundo número: '))

    const maior_numero = maior(n1,n2)
    const mmc_dois_numeros = mmc(n1,n2,maior_numero)

    console.log(`MMC = ${mmc_dois_numeros}`)
}

function mmc(n,m,k){
    let resultado = k
    while (resultado % n != 0 || resultado % m != 0){
        resultado = resultado + 1
    }
    return resultado
}

function maior(n,m){
    let maior
    maior = n
    if (m > maior){
        maior = m
    }
    return maior
}

main()