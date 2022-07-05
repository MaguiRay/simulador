
let nombre = prompt("ingrese su nombre");
let regiones;
let provinciaNorteSeleccionada;
let personasIngresadas;
let diasIngresados;



//funcion saludar
const saludarUsuario=()=>{
 
   alert("Hola "+ nombre + " te damos la bienvenida a Ar.book ");
   
}
saludarUsuario();


// De acuerdo al ingreso de la region norte me muestra las opciones de provincias
const mostrarProvinciasNorte=()=>{
    provinciaNorteSeleccionada = Number(prompt('Ingrese el numero de la provincia:\n\n1 - Jujuy\n2 - Salta'));

    switch(provinciaNorteSeleccionada){
        case 1:
            mostrarHotelesJujuy(); 
           break;
        case 2:
            mostrarHotelesSalta();
        default:
            alert("no existe esa opcion en el menu");
            mostrarProvinciasNorte();
            break;            
    }
   
}
//calcula el precio de acuerdo al ingreso de personas y dias
const calcularPrecio=(cantpersonas,cantdias,preciodia)=>{
    const precioTotal=cantpersonas * cantdias * preciodia;
    return precioTotal;

}




// De acuerdo al ingreso de hotel me muestra el valor
const mostrarHotelesJujuy=()=>{
   
    hotelesJujuy= Number(prompt('Ingrese el hotel que desea:\n\n1 - Norte Rupestre\n2 - Uwa Wasi hotel'));

    if (hotelesJujuy==1){
        console.log("el precio del hotel Norte Rupestre por dia por persona es de $3000")
       
        personasIngresadas=Number(prompt("ingrese cantidad de personas"));
        
        diasIngresados=Number(prompt("ingrese cantidad de dias"));
        
        const preciofinal=calcularPrecio(personasIngresadas,diasIngresados,3000);
        
        alert("usted va a pagar " +preciofinal+" pesos"); 


    }
    else if(hotelesJujuy==2){
        alert("Actualmente no hay disponibilidad en hotel Uwa Wasi");
    }
    else{
        alert("No existe ese hotel")
        mostrarHotelesJujuy();


    }

}
const mostrarHotelesSalta=()=>{
   
    hotelesSalta= Number(prompt('Ingrese el numero del hotel que desea:\n\n1 - Mirador del valle\n2 - Altalaluna Hotel Boutique'));

    
    if (hotelesSalta==1){
        console.log("el precio del hotel Norte Rupestre por dia por persona es de $5000");
        personasIngresadas=Number(prompt("ingrese cantidad de personas"));
        diasIngresados=Number(prompt("ingrese cantidad de dias"));
        
        const preciofinal=calcularPrecio(personasIngresadas,diasIngresados,5000);
        
        alert("usted va a pagar " +preciofinal+" pesos"); 


    }
    else if(hotelesSalta==2){
        alert("Actualmente no hay disponibilidad en hotel Altalaluna");
    }
    else{
        alert("No existe ese hotel");
        mostrarHotelesSalta();
    }
    

}

//menu

do {
    regiones = Number(prompt('Ingrese la Region en la que desee reservar su hotel:\n\n1 - Norte\n2 - Litoral\n3 - Patagonia\n4 - Salir '));


    switch (regiones) {
        case 1:
            mostrarProvinciasNorte();
            break;
        case 2:
           alert("No hay hoteles disponibles");
            break;
        case 3:
            ("No hay hoteles disponibles");
            break;
        case 4:
            alert("Nos vemos pronto");
            break;   
        
        default:
            alert("Opción incorrecta");
            break;
    }

} while(regiones !== 4);
























