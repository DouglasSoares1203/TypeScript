class Produto {
  nome: string;
  preco: number;
  desconto: number;

  constructor(nome: string, preco: number, desconto: number = 0.0) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }

  public resumo(): string {
    return `${this.nome} custa R$: ${this.preco} com ${
      this.desconto * 100
    } em off`;
  }
  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }
}

const produto1 = new Produto("Morango", 10.56, 0.3);
console.log("produto1", produto1);

const produto2 = new Produto("Abacaxi", 14.47);
console.log("produto2", produto2);

console.log(produto1.resumo());
console.log(produto2.resumo());

console.log("desconto", produto1.precoComDesconto().toFixed(2));
