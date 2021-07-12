console.log(`\n Trabalhando com condicionais`);
console.log (`\n Trabalhando com condicionais`);
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
let temPassagemComprada = false;
const Destino = "Rio de Janeiro"

console.log("Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComrador >= 18 ||   estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;  
while(contador <3){
    
    if(listaDeDestinos[contador]){
        console.log("Destino existe");
        destinoExiste = true;
       break;
    }

    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("desculpe tivemos um erro")
}

for(let cont =0; cont < 3; cont++){    
    if(listaDeDestinos[contador] == Destino){
        destinoExiste = true;
       break;
    }
    
}