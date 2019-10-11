var name = "AgileCode";
var top10 = [1,2,3];
var $scope = {title: "Javascrit", version: "6"};
var _person = "John";
var numberCode = 123;
var a = 10, b = 9, c = 8;
var language;

/**  Numbers */
var nota = 10;

nota.toExponential(2); // 100
nota.toFixed(2); // 10.00
nota.toPrecision(1); // 1e+1
nota.toString(); // "10"
nota.valueOf(); // 10

0.1 + 0.2; // 0.300000000004
3 / 0; // Infinity
"AgileCode" * 10; // NaN

/** Strings */
var nome = "AgileCode";

nome.charAt(2); // "i"
nome.charCodeAt(0); // 65
nome.concat("!"); // "AgileCode"
nome.indexOf('e'); // 4
nome.replace('Code', '!'); // "Agile!"
nome.split('e'); // ['Agil', 'Cod', ''];