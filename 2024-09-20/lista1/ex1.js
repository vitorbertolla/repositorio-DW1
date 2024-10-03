function categoria(idade){
    if(idade>=5 && idade<=7){
        console.log(`Sua categoria é Infantil A`)
    }
    else if(idade>=8 && idade<=10){
        console.log(`Sua categoria é Infantil B`)
    }
    if(idade>=11 && idade<=13){
        console.log(`Sua categoria é Juvenil A`)
    }
    if(idade>=14 && idade<=17){
        console.log(`Sua categoria é Juvenil B`)
    }
    else if(idade>=18){
        console.log(`Sua categoria é Adulta`)
    }
    else if(idade<5){
        console.log(`Sem categorias nessa idade`)
    }
}
categoria(4)
categoria(6)
categoria(8)
categoria(12)
categoria(15)
categoria(19)
