const pessoa ={
    nome: "ana", 
    idade: 25
}
// adicionando
pessoa.cidade =  "campo mourão"

// substituindo valor
pessoa.idade = 26

// apagando propriedadea
delete pessoa.nome

console.log(pessoa)

// tem um for especial tambem
for(let chave in pessoa){
    console.log(chave, pessoa[chave])
    // aqui chave vai ser a propriedade e pessoa[chave] o valor dessa proprieddade
}

// uma função também pode ser uma propriedade

const calculadora = {

    somar: function(a,b){
        return a+b
    },
    subtrair: function(a,b){
        return a-b
    }
}

console.log(calculadora.somar(5, 3));     // Saída: 8
console.log(calculadora.subtrair(5, 3));  // Saída: 2


// você pode ter objetos dentro de listas

const estudantes = [
    { nome: "Alice", nota: 9 },
    { nome: "Bruno", nota: 7 },
    { nome: "Carlos", nota: 8 }
];

// para printar so a nota do bruno
console.log(estudantes[1])
// vai pegar só o indice 1 que é o bruno

const notas = estudantes.map(elemento=> elemento.nota)
// vai retornar só as notas pq cada elemento tem todos os valores ai coloco .nota para filtrar só a nota
console.log(notas)

const produto = {
    nome: "Notebook",
    preco: 2500,
    categoria: "Eletrônicos"
};

// Desestruturação
const { nome, preco } = produto;
// nessas variaveis que eu criei elas vão receber o primeiro e segundo valor do objeto produto
// const vai receber o valor que tem no objeto produto e na chave nome, e preco
console.log(nome);  // Saída: "Notebook"
console.log(preco); // Saída: 2500

// alinhamentos 
const empresa = {
    nome: "TechCorp",
    endereco: {
        rua: "Av. Principal",
        numero: 123,
        cidade: "São Paulo"
    },
    funcionarios: [
        { nome: "João", cargo: "Desenvolvedor" },
        { nome: "Ana", cargo: "Designer" }
    ]
};

console.log(empresa.nome)
// printa o nome que é um objeto
console.log(empresa.endereco.cidade)
// vai printar a cidade, tem dois pontos pq endereço é um objeto dentro de outro objeto
console.log(empresa.funcionarios[1].nome)
// vai printar ana, funcionario é um objeto dentro de outro(empresas), que tem uma lista onde cada elemento é um objeto
// para entrar em objetos .nome e para entrar em vetores [posição]