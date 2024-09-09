
let condicao1 = true
let condicao2 = false
let condicao3 = false
let condicao4 = true
let condicao5 = false
let condicao6 = true
let condicao7 = false
let condicao8 = true

switch(condicao1){
    case true:
        switch(condicao2){
            case true:
                switch(condicao3){
                    case true:
                        console.log("A")
                        break
                    case false:
                        console.log("I")
                        break
                }
                break
            case false:
                switch(condicao4){
                    case true:
                        console.log("B")
                        break
                    case false:
                        switch(condicao5){
                            case true:
                                console.log("C")
                                break
                            case false:
                                console.log("D")
                                break
                        }
                }
                break
        }
        break
    case false:
        switch(condicao6){
            case true:
                switch(condicao7){
                    case true:
                        console.log("E")
                        break
                    case false:
                        console.log("F")
                        break
                }
                break
            case false:
                switch(condicao8){
                    case true:
                        console.log("G")
                        break
                    case false:
                        console.log("H")
                        break
                }
        }
        break
}