const numeros = [10,15,20,25,30,35]
function multiplica10(elemento){
    return elemento*10
}
const multiplica2 = function(elemento){
    return elemento*2
}
const multiplica3 = (elemento)=>{
    return elemento*2
}
// tres formas de declarar funções

// funções simples, uma entrada, não precisa de (), uma linha não precisa de {}
// se  só retorna uma linha não precisa de return 
const multiplica5 = elemento => elemento*5

// const copia = numeros.map(multiplica10)
// se voce nao vai usar a função mais de uma vez pode criar ela dentro do map ai não precisa de nome para a função
// essa função é anonima
const copia = numeros.map(function(elemento){
    return elemento*10
})
console.log(copia)

const n1 = numeros.map(elemento => `numero ${elemento*2}`)
console.log(n1)