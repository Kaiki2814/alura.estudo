export class contaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if (this.saldo >= valorSacado){
            this.saldo -= valorSacado;
            return valor;
        } 
    }
    depositar(valor){
        if(valor > 0 )
        {
            return;
        }
        this.saldo += valor;
    }
}
