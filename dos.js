function mostrar()
{
  let nombre;
  let situacionLaboral; 
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let seguir;
  let mejorPromedioSE 
  let nombreMejorPromedioSE;
  let contBuscando=0;
  let contTrabajando=0;
  let contSE=0;
  let sumaNotaBuscando=0;
  let sumaNotaTrabajando=0;
  let sumaNotaSE=0;
  let promedioNotaBuscando;
  let promedioNotaTrabajando;
  let promedioNotaSE;
  let maxEdadSE;
  let nombreMaxEdadSE;
  let nombreMM; 
  let edadMM;
  let menosMaterias;



  do{
    nombre=prompt("Ingrese el nombre");
    situacionLaboral=prompt('Ingrese la situacion laboral: "buscando", "trabajando" o "solo estudiante"').toLowerCase();
		while(situacionLaboral!="buscando" && situacionLaboral!="trabajando" && situacionLaboral!="solo estudiante"){
      situacionLaboral=prompt('Ingrese la situacion laboral: "buscando", "trabajando" o "solo estudiante"').toLowerCase();
  		}
    cantidadMaterias=parseInt(prompt("Ingrese la cantidad de materias de 1 a 8"));
    while(isNaN(cantidadMaterias) || cantidadMaterias>8 || cantidadMaterias<1){
      cantidadMaterias=parseInt(prompt("ERROR. Ingrese la cantidad de materias de 1 a 8"));
      }
    sexo=prompt('Ingrese el sexo: "femenino", "masculino" o "no binario" ').toLowerCase();
    while(sexo!="femenino" && sexo!="masculino" && sexo!="no binario"){
      sexo=prompt('ERROR. Ingrese el sexo: "femenino", "masculino" o "no binario"').toLowerCase();
    }
    notaPromedio=parseFloat(prompt("Ingrese la nota promedio entre 0 y 10"));
		while(isNaN(notaPromedio) || notaPromedio>10 || cantidadMaterias<0){
			notaPromedio=parseFloat(prompt("ERROR. Ingrese la nota promedio entre 0 y 10"));
		}
		edad=parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad)){
			edad=parseInt(prompt("ERROR. Ingrese la edad"));
    }  
   
    switch(situacionLaboral){
      case "buscando":
        if(contBuscando==0 || cantidadMaterias<menosMaterias){
          nombreMM=nombre;
          edadMM=edad;
        }
        contBuscando++;
        sumaNotaBuscando+=notaPromedio
        break;
      case "trabajando":
        contTrabajando++;
        sumaNotaTrabajando+=notaPromedio
        break;
      case "solo estudiante":
        if(contSE==0 || notaPromedio>mejorPromedioSE){
          mejorPromedioSE=notaPromedio;
          nombreMejorPromedioSE=nombre;
        } 
        if(contSE==0 || edad>maxEdadSE){
          maxEdadSE=edad;
          nombreMaxEdadSE=nombre;
        }
        contSE++;
        sumaNotaSE+=notaPromedio;
        break;
    } 
    seguir=prompt("Quiere seguir ingresando? si='s' y no='n'")
    while(seguir!='s' && seguir!='n'){
      seguir=prompt("ERROR. Quiere seguir ingresando? si='s' y no='n'")
    }
}while(seguir=='s')


if(contBuscando>0){
  promedioNotaBuscando=sumaNotaBuscando/contBuscando;
  console.log("el promedio de nota de los alumnos que estan buscando trabajo es " +promedioNotaBuscando);
  console.log("Persona que esta buscando trabajo y cursa menos materias es: " +nombreMM +"y su edad es " +edadMM);
}
else{
  console.log("No hay alumnos que esten buscando trabajo")
}
if(contTrabajando>0){
  promedioNotaTrabajando=sumaNotaTrabajando/contTrabajando;
  console.log("el promedio de nota de los alumnos que trabajan es " +promedioNotaBuscando);
}
else{
  console.log("No hay alumnos que trabajen")
}


if(contSE>0){
  promedioNotaSE=sumaNotaSE/contSE;
  console.log("El mejor promedio que es solo estudiante es " +nombreMejorPromedioSE);
  console.log("El nombre del mas viejo que es solo estudiante es " +nombreMaxEdadSE)
  console.log("El promedio de nota de los que solo estudian es " +promedioNotaSE)

}
else{
  console("No hay ningun alumno que sea solo estudiante")
}
}

