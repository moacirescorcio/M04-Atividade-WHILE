import { question } from "readline-sync";

//10. Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.

function main(){
    const limite_inferior = Number(question('Limite inferior: '))
    const limite_superior = Number(question('Limite superior: '))

    let contador = limite_inferior
    while (contador <= limite_superior){
        
        if (eh_impar(contador)){
            console.log(contador)
        }

        contador++
    }
}

function eh_impar(n){
    if (n % 2 != 0){
        return true
    }
}

main()