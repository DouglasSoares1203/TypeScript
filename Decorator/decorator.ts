function login(target) {
  console.log(target);
}

@login
class foo {}

/*************************** */
function Logger(prefix: string) {
  return (j) => {
    console.log(`${prefix}  - ${j}`);
  };
}

@Logger("minas")
class rtc {}

/****************** */
//@logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log("novo...");
  }
}

function DecoratorVazio(_: Function) {}

function LoggarClasse(construtor: Function) {
  console.log(construtor);
}

function logarClasseSe(valor: boolean) {
  return valor ? LoggarClasse : DecoratorVazio;
}

function decorator(obj: { a: string; b?: number }) {
  return function (_: Function): void {
    console.log(obj.a + " " + obj.b);
  };
}

type Constructor = { new (...args: any[]): {} };

function logarObjeto(construtor: Constructor) {
  console.log("Carregando");
  return class extends construtor {
    constructor(...args: any[]) {
      console.log("Antes...");
      super(...args);
      console.log("Depois ...");
    }
  };
}

// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function () {
    console.log(this);
  };
}

interface Eletrodomestico {
  imprimir?(): void;
}
//new Eletrodomestico().imprimir()

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();

class contaCorrente {
  @naoNegativo
  private saldo: number;
  constructor(saldo: number) {
    this.saldo = saldo;
  }
  @congelar
  sacar(valor: number) {
    if (valor < this.saldo) return this.saldo - valor;
  }
  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const cc = new contaCorrente(12750.3);
cc.sacar(5000);
cc.getSaldo();

/*cc.getSaldo = function(){
    return this['saldo'] +7000
}*/

/*** criano um decorator  para o metodo , não sera possivel reescrever o metodo */
function congelar(
  alvo: any,
  nomeMetodo: string,
  descritor: PropertyDescriptor
) {
  descritor.writable = false;
}

/****Escrevendo um metodo para propriedade****** */

function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade];
  Object.defineProperty(alvo, nomePropriedade, {
    get: function (): any {
      return alvo["_" + nomePropriedade];
    },
    set: function (valo: any): void {
      if (valor < 0) {
        throw new Error("Saldo Inválido");
      } else {
        alvo["_" + nomePropriedade] = valor;
      }
    },
  });
}

/*****Decorator de objeto ****/
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`Alvo: ${alvo}`);
  console.log(`Metodo: ${nomeMetodo}`);
  console.log(`Indice Param: ${indiceParam}`);
}
