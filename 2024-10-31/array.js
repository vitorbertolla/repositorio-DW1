function sumArray(l1){
    let soma = 0
    for(x=0;x<l1.length;x++){
        soma += l1[x]
    }
    return soma
}

console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
console.log(sumArray([10, -10, 10])); // Deve exibir: 10

function findMax(l1){
    let max = l1[0]
    let y = 0 
    for(x=0;x<l1.length;x++){
        y = l1[x]
        if(y>max){
            max = y
        }
    }

    return max
}

console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10

function countOccurrences(l1, l){
    let count = 0 
    for(x=0;x<l1.length; x++){
        if(l1[x]==l){
            count++
        }
    }
    return count
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2

function allEquals(l1){
    for(x=0;x<(l1.length-1);x++){
        if(l1[x]!=l1[x+1]){
            return false
        }
    }
    return true
}

console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false

function removeDuplicates(l1){
    let l2 = [ ]
    for(x=0;x<l1.length;x++){
        let dupli = false
        for(y=0; y<l2.length;y++){
            if(l1[x]===l2[y]){
                dupli = true
                break
            }

        }   
        if(!dupli){
            l2.push(l1[x])
        }
    }
    return l2
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]

function average(l1){
    let soma = 0
    let media = 0
    for(x=0;x<l1.length;x++){
        soma += l1[x]
    }
    media = soma/l1.length
    return media

}

console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20

function mergeArrays(l1, l2){
    let l3 = [ ]
    for(x=0;x<(l1.length+l2.length);x++){
        if(x<l1.length){
            l3[x] = l1[x]
        }else{
            l3[x] = l2[x-l1.length]
        }
    }
    return l3
}

console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]

function getEvenNumbers(l1){
    let l2 = [ ]
    let y = 0
    for(x=0;x<l1.length;x++){
        if(l1[x]%2==0){
            l2[y] = l1[x]
            y++
        }
    }
    return l2
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]

function reverseArray(l1){
    let l2 = [ ]
    let y = 0 
    for(x=(l1.length-1); x>=0; x--){
        l2[y] = l1[x]
        y++
    }
    return l2
}

console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]

function findIndex(l1, l){
    for(x=0;x<l1.length;x++){
        if(l1[x]==l){
            return x
        }
    }
    return -1
}

console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1