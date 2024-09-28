// Função para somar dois números
export function soma(numeroUm, numeroDois) {
    return numeroUm + numeroDois;
}

// Função para subtrair dois números
export function subtracao(numeroUm, numeroDois) {
    return numeroUm - numeroDois;
}

// Função para multiplicar dois números
export function multiplicacao(numeroUm, numeroDois) {
    return numeroUm * numeroDois;
}

// Função para dividir dois números
export function divisao(numeroUm, numeroDois) {
    if (numeroDois == 0) {
        return -101; // Retorna -101 se o segundo parâmetro for 0
    }
    return numeroUm / numeroDois;
}


