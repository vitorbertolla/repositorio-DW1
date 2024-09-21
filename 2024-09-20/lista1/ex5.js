function converter(valor, unidade){
    unidade = unidade.toLowerCase()
    if(unidade == "quilomêtros" || unidade=="quilometros" || unidade=="km"){
        x = valor * 100000
    }else if(unidade=="metros" || unidade=="m"){
        x = valor * 100
    }else if(unidade == "milímetro" || unidade == "milimetros" || unidade == "mm"){
        x = valor/10
    }else{
        console.log("Unidade não aceita tente: KM, M ou MM")
    }
    console.log(`${valor} ${unidade} para centimetros é igual a ${x} cm`)
}
converter(2.5, "KM")
converter(3.54, "M")
converter(1, "MM")