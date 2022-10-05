function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
/*console.log imprime(*hello');
console,log imprime('Dojo');*/

//problema 2
//*Funcion*/
function hello() {
    console.log('hello');
    //imprimimos hello
    return 15;
    //Retornamos 15

}
//declaramos una variable result
//y instanciamos la funcion hello(),hello()retorna el valor de 15

var result = hello();
//Result- 15
console.log('result is', result);
//imprimimos el result is 15.
 //Esto es una funcion*/
function numPlus(num) {
    //imprime num is 3 
    console.log('num is', num);
    //Retorna 18
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/*
variable    valores
Result        18*/

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
// la funcio logAndReturn me va mostrar dos veces el parametro o argumento. 


var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
 
//console.log imprimira [15]
//cosole.log im´primira [10]
//console.log imprimira [20]
//console.log imprimira [15]
/*
Variable     Values
num           15
result        10
*/

function timesTwoAgain(num) {
    console.log('num is', num);
    //imprime el numero ingreado
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
//Declaramos una variable llamda result
//Dentro de la variable,guardamos y sumamos los resultados de las funciones 
console.log('result is', result);
//imprimir resultado,que este caso es 16.

function sumNums(num1, num2) {  
    return num1+num2;
 }
 //esta funcion me suma los parametros  /argumentos
 //luego esa suma la muestra con el return
 console.log(sumNums(2,3))
 //muestra la funcion y sumo 2+3 y muestra 5
 console.log(sumNums(3,5))
 //muestra la funcion y sumo 3+5 y muestra 8

 function printSumNums(num1, num2) {
    //esta funcion y suma los argumentos 
    console.log(num1);   
    //console.log imprime (num1)
    return num1+num2;
    //muestra la suma de la funcion  
 }
 console.log(printSumNums(2,3))
 //muestra la suma de la funcion y suma 2+3 y muetra 5 
 console.log(printSumNums(3,5))
 //muestra la suma de la funcion 3+5 y muestra 8 


 function sumNums(num1, num2) {//declaramos la funcion sunNun y asignamos dos parametros num1+num2
 var sum = num1 + num2 //declaramos la varible sum que es iguala num1+num2 
 console.log('sum is', sum);//imprime la variable sum
    return sum;//retorna  sum
}
var result = //13
sumNums(2,3) + //5
sumNums(3,5);//8
console.log('result is', result);//13 