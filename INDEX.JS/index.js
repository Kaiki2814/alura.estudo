import { cliente } from "./cliente.js"
import{contaCorrente} from "./contaCorrente.js"
const cliente1 = new cliente();
cliente1.nome = "Ricardo"; 
cliente1.cpf = 11122223309;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 8882223309

const contaCorrenteRicardo = new contaCorrente();

contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.saldo (100);

contaCorrenteRicardo.sacar(50)
console.log(valorSacado);

console.log(contaCorrenteRicardo);


