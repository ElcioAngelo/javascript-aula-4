//1. Crie uma função de soma que precisará ter como resultado um número par. Para isso, você precisará criar os seguintes callbacks:



soma = (n1,n2,sucess,error) => {
    const result = n1 + n2 
    if(result % 2 == 0) return sucess(result)
    return error(result)
}

const ehPar = () => {
    console.log(n + " È par")
}
const ehImpar = () => {
    console.log(n + " é impar")
}

soma(2,2,ehPar,ehImpar)


const somaPromise = (n1,n2) => {
    return new Promise((sucess,error) => {
        const result = n1 + n2
        if(result % 2 ==0) return sucess(result)
        return error(result)
    })
}

/*
2 - Utilize a função anterior para criar uma promise que tenha:

- then: uma mensagem de sucesso, informando que a operação foi concluída com sucesso, dizendo se é par ou ímpar e trazendo o número;
- catch: uma mensagem de erro, informando que a operação possui erro, dizendo se é par ou ímpar e trazendo o número.

Dica: Utilize uma promise com função (resolve, reject).
*/






