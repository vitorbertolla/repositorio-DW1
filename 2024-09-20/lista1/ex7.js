
function conta(gasolina, alcool){
    x = gasolina * 0.7
    if(alcool<x){
        console.log(`com o álcool estando a ${alcool} e a gasolina estando a ${gasolina} compensa sim abastecer o carro com álcool`)
    }else{
        console.log(`com o álcool estando a ${alcool} e a gasolina estando a ${gasolina} não compensa abastecer o carro com álcool`)
    }
}
conta(5.79, 3.69)
conta(5.79, 4.20)