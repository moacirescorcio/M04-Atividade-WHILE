import { question } from "readline-sync";

//4. Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Geométrica que tem por valor inicial A0 e razão R.

function main(){
    const a0 = Number(question('A0: '))
    const limite = Number(question('Limite: '))
    const razao = Number(question('Razão: '))

    let contagem = 1
    let prox = a0
    while (prox <= limite){
        console.log(prox)
        prox = a0 * razao**(contagem)
        
        contagem +=1
        
    }
}



main()