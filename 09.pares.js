import { question } from "readline-sync";

//9. Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.

function main(){
    const limite_inferior = Number(question('Limite inferior: '))
    const limite_superior = Number(question('Limite superior: '))

    let contador = limite_inferior
    while (contador <= limite_superior){
        
        if (eh_par(contador)){
            console.log(contador)
        }

        contador++
    }
}

function eh_par(n){
    if (n % 2 === 0){
        return true
    }
}

main()