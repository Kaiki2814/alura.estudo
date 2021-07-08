console.log(`Trabalhando com condicionais`);
console.log(`Trabalhando com condicionais`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

constlistaDeDestinos = new array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComrador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);



console.log(listaDeDestinos);

// console.log(idadeComrador >18);
// console.log(idadeComrador < 18);
// console.log(idadeComrador <=18);
// console.log(idadeComrador >=18)
// console.log(idadeComrador ==18);

if(
    idadeComrador >= 18 ||   estaAcompanhada == true) {
    console.log("Boa Viagem!! ");
    listaDeDestinos.splice( 2,1); //removendo item 
} else {
        console.log("Não é maior de idade e não vender");    
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem");
} else {
    console.log("Você não pode embarcar");
}