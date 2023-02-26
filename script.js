console.log("hello");

class Conta {
  saldo;
  #senha;
  constructor(saldo, senha) {
    this.saldo = saldo;
    this.#senha = senha;
  }

  get senha() {
    return this.#senha;
  }

  set senha(novaSenha) {
    this.#senha = novaSenha;
  }

  avaliaSenha() {
    let senhaInformada = prompt("Digite sua senha:");
    if (senhaInformada == this.#senha) {
      alert("validou");
      return true;
    } else {
      alert("senha Incorreta , tente novamente!");
    }
  }

  deposito() {
    this.avaliaSenha();
    let valorDeposito = parseInt(prompt("Informe o valor do depósito:"));
    if (this.avaliaSenha) {
      this.saldo += valorDeposito;
      alert(
        `depósito de ${valorDeposito} efetuado, seu novo saldo é de ${this.saldo}`
      );
    }
  }

  retirada() {
    this.avaliaSenha();
    let valorRetirada = parseInt(prompt("Informe o valor da retirada:"));
    if (this.avaliaSenha) {
      if (this.saldo >= valorRetirada) {
        this.saldo = this.saldo - valorRetirada;
        alert(
          `saque efetuado no valor de: ${valorRetirada} , seu saldo é de: ${this.saldo}`
        );
      } else {
        alert(`saldo insuficiente , seu saldo é de :${this.saldo}`);
      }
    }
  }
}

class ContaPoupanca extends Conta {
  constructor(saldo, senha, indice) {
    super(saldo, senha);
    this.indice = indice;
  }

  atualizaJuros() {
    this.indice = 0.007;
    let ganho = (this.saldo = this.saldo + this.saldo * this.indice).toFixed(2);
    alert(`Seu saldo atualizado é de ${ganho}`);
    return ganho;
  }
}

class ContaPoupancaPremium extends ContaPoupanca {
  constructor(saldo, senha, indice) {
    super(saldo, senha, indice);
  }

  atualizaJuros() {
    this.indice = 0.012;
    let ganho = (this.saldo = this.saldo + this.saldo * this.indice).toFixed(2);
    alert(`Seu saldo atualizado é de ${ganho}`);
    return ganho;
  }
}
let ContaPoupancaPremium1 = new ContaPoupancaPremium(0, 1234);
ContaPoupancaPremium1.deposito();
ContaPoupancaPremium1.atualizaJuros();
ContaPoupancaPremium1.atualizaJuros();
ContaPoupancaPremium1.atualizaJuros();
ContaPoupancaPremium1.atualizaJuros();
ContaPoupancaPremium1.atualizaJuros();
