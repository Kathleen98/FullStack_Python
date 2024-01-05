class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number){
        this.nome = nome;
        this.renda = renda
    }

    dizOlá(): string{
        return `${this.nome} disse oi`
    }
}


class ContaBancaria{
    private saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta;
    }

    static retornaNumeroDoBanco(){
        return 1656;

    }

    getSaldo(){
        return this.saldo;
    }

    depositar(valor: number){
        this.saldo += valor
    }
}

class ContaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaPedro = new ContaPessoaFisica(12356)
ContaBancaria.retornaNumeroDoBanco();