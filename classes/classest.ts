class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number, mes: number, ano: number) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}
const aniversario = new Data(28, 2, 1996);
console.log((aniversario.dia = 4));
console.log(aniversario);

class DataComValorPadrao {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 2, ano: number = 2008) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}
const aniversarioComPadrao = new DataComValorPadrao(1990);
console.log((aniversario.dia = 4));
console.log(aniversario);

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 3,
    public ano: number = 1996
  ) {}
}
const aniversarioEsperto = new DataEsperta(3, 11, 2003);
console.log("aniversarioEsperto", aniversarioEsperto.dia);
aniversarioEsperto.mes = 8;
console.log("aniversarioEsperto", aniversarioEsperto.mes);

/******metodos protected**********/
class Carro {
  private velcoidadeAtual: number = 0;
  constructor(
    public marcar: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}
  protected alterarVelocidae(delta: number): number {
    const novaVelocidade = this.velcoidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
    if (velocidadeValida) {
      this.velcoidadeAtual = novaVelocidade;
    } else {
      this.velcoidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
    return this.velcoidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidae(5);
  }
  public frear(): number {
    return this.alterarVelocidae(-5);
  }
}

const fusca = new Carro("Fusca", "volks", 140);
console.log(fusca);
console.log(fusca.acelerar());
console.log(fusca.acelerar());
console.log(fusca.acelerar());

console.log(fusca.frear());

Array(50)
  .fill(0)
  .forEach(() => fusca.acelerar());
console.log(fusca.acelerar());

/******herança********/
/***Para que eu possa usar os atributo e metodos na classe filha os mesmo necessitam ser protected */
class ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidae(20);
  }
  public frear(): number {
    return this.alterarVelocidae(-15);
  }
}

const f40 = new ferrari("F40", 356);
console.log(f40);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());

/****Get & Sets ******/

class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }
  set idade(valor: number) {
    this._idade = valor;
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 24;
console.log("idade", pessoa1.idade);

/****Atributos e metodos staticos****/

class Matematica {
  static PI: number = 3.14;
  static caculaArea(raio: number): number {
    return this.PI * raio * raio;
  }
}

console.log(Matematica.caculaArea(10));

/********Classe abstrata****/
abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numneros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma1 extends Calculo {
  executar(...numeros: number[]) {
    return (this.resultado = numeros.reduce((a, b) => a + b));
  }
}
class Multiplicar1 extends Calculo {
  executar(...numeros: number[]) {
    return (this.resultado = numeros.reduce((a, b) => a * b));
  }
}

const s = new Soma1();
s.executar(1, 2, 3, 4, 5, 6);
console.log("SOMA", s.getResultado());

const m = new Multiplicar1();
m.executar(2, 2, 2);
console.log("MULTIPLICAR", m.getResultado());

///**********Sigleton******** */

class Unico {
  private static instance: Unico = new Unico();
  constructor() {}
  static getInstance(): Unico {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

//const errado = new Unico()
console.log(Unico.getInstance().agora());

/*****Somente leitura ****** */

class Aviao {
  public readonly modelo: string;
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao("Tu-114", "PT-BAC");
//turboHelice.modelo='abcde'
//turboHelice.prefixo='PT-GHF'
console.log(turboHelice);
