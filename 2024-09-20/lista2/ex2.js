function numeros(N){
    x = N
    if(N>0){
        for(contador=1; contador<=N; contador+=1){
            console.log(x)
            x-=1
        } 
    }else{
        for(contador=1; contador>=N; contador-=1){
            console.log(contador)
        }
    }
    console.log(" ")

}
numeros(-10)
numeros(10)