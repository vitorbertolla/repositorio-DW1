class Fruta{
    constructor(id,nome,cor,peso){
        this.id=id;
        this.nome=nome;
        this.cor=cor;
        this.peso=peso;
    }
}


let listaFrutas = [];

function buscarPorId(idFrutaProcurada, listaFrutas){
    for (let i =0; i<listaFrutas.length;i++){
        const f = listaFrutas[i];
        if (f.id == idFrutaProcurada){
            return f;
        }
    }
    return null;
}
function BotaoInserir(){
   // alert("deu certo o botao")

   const idFruta= document.getElementById("inputId").value;
   const NomeFruta= document.getElementById("inputNome").value;
   const CorFruta= document.getElementById("inputCor").value;
   const PesoFruta= document.getElementById("inputPeso").value;
   //console.log (idFruta);
   let fruta= new Fruta (idFruta , NomeFruta , CorFruta , PesoFruta);
  const f2= buscarPorId (fruta.id, listaFrutas);
  if(f2==null){
    listaFrutas.push(fruta);
  }else{
    alert ("já cadastrada com esse id");
  }
   
}


function BotaoListar(){
let saida = document.getElementById("outputListaDeFrutas");
saida.innerHTML= "";
if (listaFrutas.length==0){
    alert ("A lista está vazia")
}else{
    for (let i = 0;i< listaFrutas.length ; i++){
        let f = listaFrutas[i];
        saida.innerHTML+=
        f.id + " - " + 
                f.nome + " - " + 
                f.cor + " - " + 
                f.peso + "<br>";
    "<br>";
    }
}

}