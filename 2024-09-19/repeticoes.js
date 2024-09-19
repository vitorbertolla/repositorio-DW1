function tabuada(numero){
    // inicialização - condição - incremento (estrutura while)
    let contador = 0 
    while(contador<11){
        console.log(numero, "*", contador, "=", numero*contador)
        contador+=1
    }
    console.log(" ")
}
tabuada(3)
tabuada(5)

function tabuada1(numero){
    //  enquanto no while fica tudo separada no while fica tudo na mesma linha
    // ordem do for: inicialização da variavel, condição e por ultimo incremento
    // for é melhor quando vc sabe ate onde vai sua condição
    for(let contador = 0; contador<11; contador+=1 ){
        console.log(numero, "*", contador, "=", numero*contador)
    }
    console.log(" ")
}
tabuada(7)
tabuada(8)

