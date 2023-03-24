import { stringify } from "querystring";

class Moto {
  private velocidade: number = 0;
  constructor(public nome: string) {
    this.nome = nome;
  }
  public buzinar(): void {
    console.log("TOOOOOOOT");
  }
  public acelerar(delta: number): number {
    return (this.velocidade = this.velocidade + delta);
  }
  public retornaVelocidade(): number {
    return this.velocidade;
  }
}
const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.retornaVelocidade());
moto.acelerar(35);
console.log(moto.retornaVelocidade());

/**** exercicio2*****/
class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0) {
    this.base = base;
    this.altura = altura;
  }
}

class Retangulo extends Objeto2D {
  public Area(): number {
    return this.altura * this.base;
  }
}

const retangulo = new Retangulo(2, 3);
console.log("Area Reatangulo", retangulo.Area());

/****Exercico***** */
class Estagiario {
  private _primeiroNome: string = "";

  get nome() {
    return this._primeiroNome;
  }
  set nome(nome: string) {
    this._primeiroNome = nome;
  }
}

const est = new Estagiario();
est.nome = "Diego";
console.log(est.nome);

enum Cor {
  azul,
  verde,
  branco,
  preto,
}
class Carro {
  constructor(
    public nome: string,
    public anoFbricacao: string,
    public cor: Cor
  ) {}
}
