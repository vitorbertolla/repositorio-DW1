let carro = {
    modelo: "Corolla",
    marca: "Toyota",
    ano: 2020
}
console.log(carro)

// 
console.log(carro["marca"])
carro["ano"] = 2021
console.log(carro)

// 
carro["cor"] = "preto"
delete carro["modelo"]
console.log(carro)
// 

let pessoa = {
    nome: "joão",
    idade: 16,
    cumprimento: function(nome1){
        return (`olá, meu nome é ${nome1}`)
    }
}
console.log(pessoa.cumprimento("joão"))
// 

let produtos = {
    nome: "ps4",
    preco: 1500,
    categoria:"eletrônicos"
}
for (chave in produtos){
    console.log(`${chave}: ${produtos[chave]}`)
}
// 

let biblioteca = [
    {nome: "senhor dos anéis", autor:"x", anodepublicacao: 2002},
    {nome: "1984", autor:"y", anodepublicacao: 2010},
    {nome: "Orgulho e Preconceito", autor:"z", anodepublicacao: 1999}
]
for (livro of biblioteca){
    console.log(livro["nome"])
}
//  

let carrinho = {
    itens: [
        {nome:"café", preco: 44, quantidade: 2},
        {nome:"feijão", preco: 15, quantidade: 1},
        {nome:"arroz", preco: 30, quantidade: 3}
    ],
    calculaTotal: function(itens){
        let total = 0
        for (item of itens){
            total += item["preco"]*item["quantidade"]
        } 
        return total
    }
}
console.log(carrinho.calculaTotal(carrinho["itens"]))
// 

let aluno = {
    nome: "joão",
    idade: 17,
    curso: "TII"
}
const {nome, idade, curso} = aluno
console.log(nome)
console.log(idade)
console.log(curso)

// 

let estoque =[
    {id: 1, nome:"tenis", quantidade: 20},
    {id: 2, nome:"camiseta", quantidade: 30},
    {id: 3, nome:"caneta", quantidade: 23}
]
function atualiza (num, quantidadeNova){
    for (cd of estoque){
        if (cd.id == num){
                cd.quantidade = quantidadeNova
        }
    }
}
atualiza(1, 200)
console.log(estoque)

// 

let usuario = [ 
    {nome: "vitor", idade: 21, gmail: "v@gmail.com"},
    {nome: "joao", idade: 31, gmail: "j@gmail.com"},
    {nome: "luis", idade: 11, gmail: "l@gmail.com"}
];

const usr = usuario.map(function(id) {
    return {
        nome: id.nome,
        gmail: id.gmail
    };
});

console.log(usr);
