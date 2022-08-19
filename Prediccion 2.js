function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//esta funcion muestra el arreglo auntContactInfo 
//"Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345.

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}

//se crea una funcion que contiene dos arreglos
//arreglo es PRODUCE[manzanas,naranjas]
//arreglo es FROZEN[blocoli, helado]
//ingreso dato con PUSH al arreglo FROZEN-
//Arreglo FROZEN quedaria. [brocoli,helado,croqueta de papas.]
//Imprime todos los datos del arreglo FROZEN.

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];

movieLibrary.push("Zoro");

movieLibrary[1] = "Beetlejuice";


console.log(movieLibrary);

//declaramos un arreglo llamado "movieLibrary" ["Bambi", "E.T.", "Toy Story"]
//hacemos un push, es decir ingresamos un valor al arreglo "ZORO"
//despues del push el arreglo queda ["Bambi", "E.T.", "Toy Story","Zoro"]
//Despues reemplazamos el E.T. por Beetlejuice.