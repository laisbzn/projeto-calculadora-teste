import { describe, expect, it } from "vitest"
import { divisao, multiplicacao, soma, subtracao } from "./calculadora"


describe ("soma", () => {
    
    it("Deve retornar 50 ao somar 30 e 20", () => {
        
        const numeroUm = 30
        const numeroDois = 20
        const resultado = soma(numeroUm, numeroDois)

        expect(resultado).toBe(50)

    })

}) 

describe("subtracao", () => {

    it("Deve retornar 20 ao subtrair 80 e 60", () => {

        const numeroUm = 80
        const numeroDois = 60
        const resultado = subtracao(numeroUm, numeroDois)

        expect(resultado).toBe(20)

    })
})

describe("multiplicacao", () => {

    it("Deve retornar 30 ao multiplicar 2 e 15", () => {

        const numeroUm = 2
        const numeroDois = 15
        const resultado = multiplicacao(numeroUm, numeroDois)

        expect(resultado).toBe(30)

    })
})

describe("divisao", () => {

    it("Deve retornar 40 ao dividir 80 e 2", () => {

        const numeroUm = 80
        const numeroDois = 2
        const resultado = divisao(numeroUm, numeroDois)

        expect(resultado).toBe(40)
    })

    it("Deve retornar -101 ao dividir 80 e 0", () => {

        const numeroUm = 80
        const numeroDois = 0
        const resultado = divisao(numeroUm, numeroDois)

        expect(resultado).toBe(-101)
    })
})