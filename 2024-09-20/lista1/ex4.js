function gotas(dosagem){
    let x = (dosagem/500)*20
    return x
}
function dosagem(idade, peso){
    let y
    if(idade>=12){
        if(peso>=60){
            y = gotas(1000)
        }else{
            y = gotas(875)
        }
    }else{
        if(peso>=5 && peso<= 9){
            y = gotas(125)
        }
        else if(peso>9 && peso<=16){
            y = gotas(250)
        }
        if(peso>16 && peso<=24){
            y = gotas(500)
        }
        if(peso>24){
            y = gotas(750)
        }
    }
    console.log(`O paciente com ${idade} anos e ${peso} kg deverá tomar 1000mg correspondente a ${y} gotas`)
    console.log(" ")
}

dosagem(20, 80)
dosagem(20, 50)
dosagem(10, 6)
dosagem(10, 10)
dosagem(10, 18)
dosagem(10, 50)