"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { areaCircunferecnia } from './circuferencia'
//import {// areaRetangulo } from './retangulo'
const retangulo_1 = __importDefault(require("./retangulo"));
const circuferencia_1 = require("./circuferencia");
const { digaOi } = require("./novo");
console.log(digaOi("Diego"));
console.log((0, retangulo_1.default)(7, 7));
console.log((0, circuferencia_1.areaCircunferecnia)(10));
