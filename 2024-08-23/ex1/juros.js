

function juroscalc(){
    let capital = Number(document.getElementById("capital").value)
    let taxa = Number(document.getElementById("taxa").value)
    let periodo = Number(document.getElementById("periodo").value)
    let saida = document.getElementById("saida")
    let taxa2 = taxa/100
    let montante = capital*(1+taxa2)**periodo
    let jurostotal = montante - capital
    saida.innerText = jurostotal
}
