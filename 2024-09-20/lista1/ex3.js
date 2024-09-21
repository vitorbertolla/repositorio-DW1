function ehTriangulo(lado1, lado2, lado3){
    if((lado1<lado2+lado3) && (lado2<lado1+lado3) && (lado3<lado1+lado2)){
        return true
    }
    return false
}

let l1 = 6
let l2 = 7
let l3 = 7

if (ehTriangulo(l1,l2,l3)){
    console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo`)
    if(l1==l2 && l1==l3){
        console.log(`O triângulo é equilátero`)
    }else if(l1==l2 || l1==l3 || l2==l3){
        console.log(`O triângulo é isóceles`)
    }else{
        console.log(`O triângulo é escaleno`)
    }
}else {
    console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`)
}