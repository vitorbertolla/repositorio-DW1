function reverseString(string){
    let texto = ''
    for(let y = string.length - 1; y>=0;y--){ 
        texto += string[y]
    }
    return texto
}
console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"

function countVowels(string){
    let x = ''
    let z = 0
    for(let y = string.length - 1; y>=0; y--){
        x = string.toLowerCase()[y]
        if(x=='a' || x=='e' ||x=='i' ||x=='o' ||x=='u'){
            z +=1
        }
    }
    return z
}
console.log(countVowels("OpenAI")); // Deve exibir: 3
console.log(countVowels("JavaScript")); // Deve exibir: 3

function isPalindrome(string){
    let texto = ''
    for(let y = string.length - 1; y>=0;y--){ 
        texto += string[y]
    }
    if (texto==string){
        return true
    }else{
        return false
    }

}

console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false

function countOccurrences(string, caracter){
    let x = ''
    let z = 0
    for(let y = string.length - 1; y>=0; y--){
        x = string.toLowerCase()[y]
        if(x == caracter){
            z +=1
        }
    }
    return z

}
console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3


function getInitials(name){
    let z = name.toUpperCase()[0]
    for(let x = 0; x<name.length; x++){
        if(name[x] == ' '){
            z += name.toUpperCase()[x+1]
        }
    }
    return z
}
console.log(getInitials("João Silva Oliveira")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"

function toSnakeCase(string){
    let z = ''
    for(let x = 0; x<string.length; x++){
        if(string[x] == ' '){
            z += '_'
        }else{
            z += string.toLowerCase()[x]
        }
    }
    return z
}
console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"

function capitalizeWords(string){
    let z = string.toUpperCase()[0]
    let h = 0 
    for(let x = 1; x<string.length; x++){
        if(h==1){
            z += string.toUpperCase()[x]
            h = 0

        }else if(string[x] == ' '){
            z+=string[x]
            h = 1            
            
        }else{
            z += string.toLowerCase()[x]
        }

    }
    return z
}

console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"

function trimSpaces(string){
    texto = ''
    let l = 0 
    for(let x = 0; x<string.length; x++){
        if(string[x] == ' '){
            for(l = x; string[l]==' ';l++){
                y = l
            }
            texto+=string[y]
            x = y
        }else{
            texto+=string[x]}
        }
    texto = texto.trim()
    return texto
}

console.log(trimSpaces("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante  ")); // Deve exibir: "Programação é interessante"

function replaceChar(string, n1, n2){
    texto =''
    for(let x=0; x<string.length; x++){
        if(string[x]==n1){
            texto+=n2
        }else{
            texto+=string[x]
        }
    }
    return texto
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"