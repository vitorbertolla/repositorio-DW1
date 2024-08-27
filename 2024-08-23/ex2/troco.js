function cedulascalc(){
    let valortotal = Number(document.getElementById("valortotal").value)
    let valorpago = Number(document.getElementById("valorpago").value)
    let saida1 = document.getElementById("saida1")
    let saida2 = document.getElementById("saida2")
    let saida3 = document.getElementById("saida3")
    let valortroco = valortotal - valorpago
    let resto1 = valortroco/20
    let resto2 = resto1/10
    let resto3 = resto2/1
    let int20 = valortroco - resto1
    quant20 = int20/20
    let in10 = resto1 - resto2
    quant10 = int20/10
    let int1 = resto2 - resto3
    quant1 = int1/1
    saida1.innerText  = quant20
    saida2.innerText  = quant10
    saida3.innerText  = quant1
}