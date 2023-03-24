"use strict";
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(element) {
        this.fila.push(element);
    }
    proximo() {
        if (this.fila.length > 0) {
            const proximo = this.fila[0];
            this.fila.splice(0, 1);
            return proximo;
        }
        else {
            return null;
        }
    }
    imprmi() {
        console.log(this.fila);
    }
}
const f = new Fila("aline", "bruna", "tieta", "maria", "monica");
f.imprmi();
f.entrar("elias");
f.imprmi();
console.log(f.proximo());
console.log(f.proximo());
console.log(f.proximo());
f.imprmi();
