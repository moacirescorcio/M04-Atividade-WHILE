import { question } from "readline-sync";

//8. Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.

function main(){
    const n = Number(question('Digite um número: '))
    const limite_inferior = Number(question('Limite inferior: '))
    const limite_superior = Number(question('Limite superior: '))

    const multiplos = eh_multiplo(n,limite_inferior,limite_superior)
    
    console.log(`Os múltiplos de ${n} são ${multiplos}`)
}

function eh_multiplo(n,limite_inferior,limite_superior){
    let contador = limite_inferior
    let resultado = []
    while (contador <= limite_superior){
        if (contador % n === 0){
            resultado.push(contador)
        }

        contador ++
    }
    return resultado
}

main()