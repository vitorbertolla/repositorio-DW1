function fatorial(n){
    contador = n-1
    x = n
    while(contador!=1){
        x= x*contador
        contador-=1
    }
    console.log(x)
}
fatorial(8)