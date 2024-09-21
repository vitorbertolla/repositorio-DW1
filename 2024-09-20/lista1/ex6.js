function bissexto(ano){
    if(ano%400==0 || (ano%4==0 && ano%100!=0)){
        console.log(`O ano ${ano} é bissexto`)
    }else{
        console.log(`O ano ${ano}  não é bissexto`)
    }
}
bissexto(1600)
bissexto(1601)
bissexto(2023)
bissexto(2024)