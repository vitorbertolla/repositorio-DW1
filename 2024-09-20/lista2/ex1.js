function numeros(N){
    x = N
    if(N>0){
        for(contador=1; contador<=N; contador+=1){
            console.log(contador)
        } 
    }else{
        for(contador=1; contador>=N; contador-=1){
            console.log(x)
            x+=1
        }
    }
    console.log(" ")

}
numeros(-20)
numeros(20)

