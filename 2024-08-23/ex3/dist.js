function calcular(){
    let distancia = Number(document.getElementById("distancia").value)
    let autonomia = Number(document.getElementById("autonomia").value)
    let preco = Number(document.getElementById("preco").value)
    let pedagio = Number(document.getElementById("pedagio").value)
    
    let saida = document.getElementById("saida")
    let total = (distancia/autonomia)*preco+pedagio
    saida.innerText = total
}