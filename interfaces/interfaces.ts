interface Humano {
  nome: string;
  idade?: number; //? deixa o atributo como opcional
  [prop: string]: any; // atributo no qual não sei o o que vai ser  , pode ser qualquer coisa
  saudar(sobrenome: string): void;
}

function saudarOlaComNome(pessoa: Humano) {
  console.log("ola  " + pessoa.nome);
}
function MudarNome(pessoa: Humano) {
  pessoa.nome = "Minas";
}

const pessoa: Humano = {
  nome: "Diego",
  idade: 27,
  saudar(sobrenome: string): void {
    console.log("Meu nome é:" + this.nome + "e o meu sobrenome é:" + sobrenome);
  },
};
saudarOlaComNome(pessoa);
MudarNome(pessoa);
saudarOlaComNome(pessoa);
//saudarOlaComNome({nome:'Dom', idade:87, mm:'AAAA'})
pessoa.saudar("Veiga");

/********usando inteface com classes ****/

class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date(); // a calsse pode implementar mais atributos que não esteja na interface
  saudar(sobrenome: string): void {
    console.log(
      "Ola meu nome é " + this.nome + " e meu sobrenome é" + sobrenome
    );
  }
}

const meuCLiente = new Cliente();
meuCLiente.nome = "Diego";
saudarOlaComNome(meuCLiente);
meuCLiente.saudar("Roberto");
console.log(meuCLiente.ultimaCompra);

/******Interface Função******** */

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);

/******herança ****** */

interface a {
  a(): void;
}
interface b {
  b(): void;
}

interface abc extends a, b {
  c(): void;
}

class RealA implements a {
  a(): void {}
}

class RealAB implements a, b {
  a(): void {}
  b(): void {}
}
class RealABC implements abc {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstractABS implements a, b {
  a(): void {}
  b(): void {}
  abstract d(): void;
}
