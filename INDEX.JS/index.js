class cliente{
    nome;
    cpf;
    rg;
}

class contaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if (this.saldo >= valorSacado){
            this.saldo -= valorSacado;
        } 
    }
}

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Ricardo"; 
cliente1.cpf = 11122223309;
cliente1.agenciaA = 1001;
cliente1.saldo = 0;
cliente1.rg = 123456789;

cliente2.nome = "Alice";
cliente2.cpf = 8882223309
cliente2.agencia = 1001;
cliente2.saldo = 0;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50)



console.log(contaCorrenteRicardo.saldo); 
console.log(cliente1);
console.log(cliente2);