"use strict";
//1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
//2
const dizerOla = (nome = "Pessoa") => console.log(nome);
dizerOla();
dizerOla("murilo");
//3
const nums = [-3, 33, 38, 5];
console.log(Math.max(...nums));
//4
const nums1 = [-3, 33, 38, 5];
const array = [55, 20, ...nums1];
console.log(array);
//5
const notas = [8, 5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(`nota1: ${nota1},nota2: ${nota2},nota3: ${nota3}`);
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(`primeiroNome:${primeiroNome},experiencia: ${experiencia} `);
