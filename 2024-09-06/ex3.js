let condicao1 = true
let condicao2 = false
let condicao3 = false
let condicao4 = true
let condicao5 = false
let condicao6 = true
let condicao7 = false
let condicao8 = true
if (condicao1 == true) {
  if (condicao2 == true) {
    if (condicao3 == true) {
        console.log("A")
    }else{
      console.log("I")
    }
  } else if (condicao4 == true) {
    console.log("B")
  } else if (condicao5 == true) {
    console.log("C")
  } else {
    console.log("D")
  }
} else if (condicao6 == true) {
  if (condicao7 == true) {
    console.log("E")
  } else {
    console.log("F")
  }
} else if (condicao8) {
  console.log("G")
} else {
  console.log("H")
}
