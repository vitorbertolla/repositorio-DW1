function primos(quantia){
    let x = 0 
    let y = 0 
    let n = 2  
    while(y<quantia){
        for(contador=1; contador<=n; contador+=1){
            if(n%contador==0){
                x+=1
            }
        }
        if(x==2){
            console.log(n)
            y+=1
        }
        n+=1
        x = 0
    }
}
primos(40)