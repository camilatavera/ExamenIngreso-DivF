function mostrar()
{


let nombre;
let obraSocial;
let edad;
let temperaturaCorporal;
let sexo;

let contOSDEmayores=0;

let nombrePMJ; //PMJ= con pami y mas joven
let temperaturaPMJ;
let minEdadPMJ;
let flag=1

let contPasajeros=0;
let precioxPasajero=600;
let precioTotalSD; //SD=sin descuento

let contPAMI=0;
let porcentajePAMI;
let descuento=25
let precioCD; //CD=con descuento


do{

	nombre=prompt("Ingrese el nombre");
	obraSocial=prompt('Ingrese la situacion laboral: "PAMI", "OSDE" o "otras"').toLowerCase();
	while(obraSocial!="pami" && obraSocial!="osde" && obraSocial!="otras"){
		obraSocial=prompt('ERROR. Ingrese la situacion laboral: "PAMI", "OSDE" o "otras"').toLowerCase();
	}
	edad=parseInt(prompt("Ingrese la edad (solo mayores)"));
	while(isNaN(edad) || edad<18){
		edad=parseInt(prompt("ERROR. Ingrese la edad(solo mayores)"));
		}  
	temperaturaCorporal=parseFloat(prompt("Ingrese la temperatura corporal"))
	while(isNaN(temperaturaCorporal) || temperaturaCorporal<=0){
		temperaturaCorporal=parseFloat(prompt("ERROR. Ingrese la temperatura corporal"));
	}
	sexo=prompt('Ingrese el sexo: "femenino", "masculino" o "no binario" ').toLowerCase();
	while(sexo!="femenino" && sexo!="masculino" && sexo!="no binario"){
		sexo=prompt('ERROR. Ingrese el sexo: "femenino", "masculino" o "no binario"').toLowerCase();
	}
	
	if(edad>=60){
		contOSDEmayores++
	}

	if(sexo=="femenino" && (flag || edad<minEdadPMJ)){
		minEdadPMJ=edad;
		nombrePMJ=nombre;
		temperaturaPMJ=temperaturaCorporal;
		flag=0;
	}
	contPasajeros++;
	if(obraSocial=="pami"){
		contPAMI++;
	}


	seguir=prompt("Quiere seguir ingresando? si='s' y no='n'")
    while(seguir!='s' && seguir!='n'){
      seguir=prompt("ERROR. Quiere seguir ingresando? si='s' y no='n'")
    }
}while(seguir=='s')

//a)
if(contOSDEmayores>0){
	console.log("La cantidad de personas con OSDE de mas de 60 años es " +contOSDEmayores);
}
else{
	console.log("no hay personas con OSDE de mas de 60 años ");
}

//b) el nombre y temperatura de la mujer que tenga pami mas joven.
if(flag==0){
	console.log("La mujer de PAMI mas joven es " +nombrePMJ +"y su temperatura es " +temperaturaPMJ);
}
else(
	console.log("no hay mujer de PAMI")
)

//c) cuanto sale el viaje total sin descuento.
precioTotalSD=precioxPasajero*contPasajeros;
console.log("el precio final sin descuetno es " +precioTotalSD);

//d)
if(contPAMI>0){
	porcentajePAMI=contPAMI*100/contPasajeros
	if(porcentajePAMI>50){
		precioCD=precioTotalSD*(100-descuento)/100	
		console.log("El precio final con el descuento es " +precioCD);	
	}

}











}


