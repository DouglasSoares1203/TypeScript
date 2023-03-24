var Geometria;
(function (Geometria) {
  var Area;
  (function (Area) {
    function retangulo(base, altura) {
      return base * altura;
    }
    Area.retangulo = retangulo;
  })((Area = Geometria.Area || (Geometria.Area = {})));
})(Geometria || (Geometria = {}));
var Geometria;
(function (Geometria) {
  var Area;
  (function (Area) {
    var PI = 3.14;
    function circunferencia(raio) {
      return PI * Math.pow(raio, 2);
    }
    Area.circunferencia = circunferencia;
  })((Area = Geometria.Area || (Geometria.Area = {})));
})(Geometria || (Geometria = {}));
///<reference path="namepacesRet.ts"/>
///<reference path="NamespaceCIr.ts"/>
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(3, 5));
