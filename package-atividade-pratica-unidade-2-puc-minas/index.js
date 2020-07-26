module.exports = {
    adicao: {
        calcular: (n1, n2) => n1 + n2,
        operador: '+'
    },
    subtracao: {
        calcular: (n1, n2) => n1 - n2,
        operador: '-'
    },
    multiplicacao: {
        calcular: (n1, n2) => n1 * n2,
        operador: '*'
    },
    divisao: {
        calcular: (n1, n2) => {
            if (n2 == 0)
                throw new Error('Não pode dividir por zero')
            return n1 / n2;
        },
        operador: '/'
    }
}