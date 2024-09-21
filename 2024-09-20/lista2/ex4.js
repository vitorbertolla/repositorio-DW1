function primo(n){
    let x = 0
    if(n>0){
        for(contador=1; contador<=n; contador+=1){
            if(n%contador==0){
                x+=1
            }
        }
        if(x==2){
            console.log(`o número ${n} é primo`)
        }else{
            console.log(`o número ${n} não é primo`)
        }
    }else{
        console.log(`o número ${n} não é primo`)
    }

}
primo(1)
primo(3)
primo(5)
primo(7)
primo(9)
primo(12)
primo(4556435)
primo(2)
primo(11)
primo(14)