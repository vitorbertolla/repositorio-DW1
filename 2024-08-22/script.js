    // document.getElementById
    // document.getElementsByTagName
    // document.getElementsByClassName
    // selecionar os elementos do html


    // let peso = Number(document.getElementById("peso").value)
    // let altura = Number(document.getElementById("altura").value)


    // peguei os valores recebidos no input do html
    //  .value faz pegar so o conteudo 
    // sem o value vai pegar tudo do input, sem o value pode fazer assim:
    let inputpeso = document.getElementById("peso")
    let inputaltura = document.getElementById("altura")
    let divSaida = document.getElementById("saida")
    let botaocalcular = document.getElementById("calcular")
    botaocalcular.onclick = calcularimc
    // outro jeito de fazer o botao funcionar

    function calcularimc(){
    // ENTRADA
    let peso = Number(inputpeso.value)
    let altura = Number(inputaltura.value)

    //  a segunda variavel vai pegar so o valor da primeira que tem tudo

    // PROCESSAMENTO
    let imc = peso/ (altura*altura)

    // SAIDA

    divSaida.innerText = imc
    //  coloca no div o resultado do imc
    }
