
function mostrar()
{

	/*
	Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
-el nombre del producto 
-el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-Categoria ("desinfectante", "bactericida", "detergente" ) 
- el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos
*/
	let nombre;
	let tipoProducto;
	let precio;
	let unidades;
	let categoria;
	let fabricante;
	let sumaCantidadDesinfectante=0;
	let sumaCantidadBactericida=0;
	let sumaCantidadDetergente=0;
	let contIngresoAlcohol=0;
	let contIngresoIac=0;
	let contIngresoQuat=0;
	let sumaCantidadAlcohol=0;
	let sumaCantidadIac=0;
	let sumaCantidadQuat=0;
	let unidadesDetergenteMD=0; //MD=menos de doscientos pesos
	let fabricanteMaxPrecio;
	let productoMaxPrecio;
	let maxPrecio;
	let flag=1
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;
	

	for(let i=0; i<5; i++){
		nombre=prompt("Ingrese el nombre del producto");
		tipoProducto=prompt('Ingrese nombre: "ALCOHOL", "IAC" o "QUAT"').toUpperCase();
		while(tipoProducto!="ALCOHOL" && tipoProducto!="IAC" && tipoProducto!="QUAT"){
			tipoProducto=prompt('ERROR. Ingrese nombre: "ALCOHOL", "IAC" o "QUAT"').toUpperCase();
		}
		precio=parseFloat(prompt("Ingrese el precio entre 100 y 300"));
		while(isNaN(precio) || precio>300 ||precio<100){
			precio=parseFloat(prompt("ERROR. Ingrese el precio entre 100 y 300"));
		}
		unidades=parseFloat(prompt("Ingrese las unidades entre 1 y 1000"));
		while(isNaN(unidades) || precio>1000 ||precio<=0){
			unidades=parseFloat(prompt("ERROR. Ingrese las unidades entre 1 y 1000"));
		}
		categoria=prompt('Ingrese la categoria: "desinfectante", "bactericida" o "detergente"').toLowerCase();
		while(categoria!="desinfectante" && categoria!="bactericida" && categoria!="detergente"){
			categoria=prompt('ERROR. Ingrese la categoria: "desinfectante", "bactericida" o "detergente"').toLowerCase();
		}
		fabricante=prompt("Ingrese el fabricante");

		//a)
		switch(tipoProducto){
			case "alcohol":
				contIngresoAlcohol++;
				sumaCantidadAlcohol+=unidades;
			case "iac":
				contIngresoIac++;
				sumaCantidadIac+=unidades;				
			case "quat":
				contIngresoQuat++;
				sumaCantidadQuat+=unidades;
		}

		//b)
		switch(categoria){
			case "desinfectante":
				sumaCantidadDesinfectante=+unidades
				break;
			case "bactericida":
				sumaCantidadBactericida=+unidades
				break;
			case "detergente":
				sumaCantidadDetergente=+unidades
				if(precio<=200){
					unidadesDetergenteMD+=unidades;
				}
				break;
		}

		//d) el fabricante y Categoria del más caro de los productos
		if(flag || precio>maxPrecio){
			maxPrecio=precio;
			fabricanteMaxPrecio=fabricante;
			productoMaxPrecio=tipoProducto;
			flag=0;
		}
	}

	//a) El promedio de cantidad por tipo de producto
	if(contIngresoAlcohol>0){
		promedioAlcohol=sumaCantidadAlcohol/contIngresoAlcohol;
		console.log("El promedio de cantidad de alcohol es " +promedioAlcohol);
	}
	if(contIngresoIac>0){
		promedioIac=sumaCantidadIac/contIngresoIac;
		console.log("El promedio de cantidad de iac es " +promedioIac);

	}
	if(contIngresoQuat>0){
		promedioQuat=sumaCantidadQuat/contIngresoQuat;
		console.log("El promedio de cantidad de quat es " +promedioQuat);
	}

//b)La categoria("desinfectante", "bactericida", "detergente" )con mas cantidad de unidades en total de la compra
	if(sumaCantidadDesinfectante>sumaCantidadBactericida && sumaCantidadDesinfectante>sumaCantidadDetergente){
		console.log("La categoria con mas unidades es el desinfectante");
	}
	else if(sumaCantidadBactericida>sumaCantidadDesinfectante && sumaCantidadBactericida>sumaCantidadDetergente){
		console.log("La categoria con mas unidades es el bacterizada");
	}
	else{
		console.log("La categoria con mas unidades es el detergente");
	}
	//d)el fabricante y Categoria del más caro de los productos
	console.log("Producto mas caro: " +productoMaxPrecio +" y el fabricante: " +fabricanteMaxPrecio);
	

	//c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
	if(unidadesDetergenteMD>0){
		console.log("Unidades totales de detergente con precios menos a 200: " +unidadesDetergenteMD);
	}
}
