import { question } from "readline-sync";

//11.Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.

function main(){
    const limite_inferior = Number(question('Limite inferior: '))
    const limite_superior = Number(question('Limite superior: '))

    let contador = limite_inferior
    while (contador <= limite_superior){
        
        if (eh_primo(contador)){
            console.log(contador)
        }

        contador++
    }
}

function eh_primo(n){
    let contador = 2
    while (contador < n){
        if (n % contador === 0){
            return false
        }
        contador++
    }
    return true
}

main()