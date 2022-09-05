class Agenda{

    lista = new Array();
    indice = 1;
    
    menu(){

        let opcion = prompt("Hola, seleccione su operacion: Argegar, Eliminar, Mostrar, Modificar o Salir")

        if(opcion.toLowerCase() == "agregar"){
            this.agregar();
            this.menu();
        }else if(opcion.toLowerCase() == "eliminar"){
            this.eliminar();
            this.menu();
        }else if(opcion.toLowerCase() == "mostrar"){
            this.mostrar();
            this.menu();
        }else if(opcion.toLowerCase()== "modificar"){
            this.modificar();
            this.menu();
        }else if(opcion.toLowerCase() == "salir"){
            return;
        }else{
            this.menu();
        }  
    }   
        
    agregar(){
        alert("Selecciono Agregar");
        this.lista[this.indice] = new Persona(prompt("Ingrese el nombre de su contacto"),prompt("Ingrese el apellido de su contacto"),prompt("Ingrese el numero de su contacto"));
        this.indice += 1;
    }

    eliminar(){
        alert("Selecciono Eliminar");
        this.mostrar(); 
        let indice = prompt("Ingrese el indice de la persona a eliminar");
        
        if((indice <= 0) || (indice > this.lista.length) ){
            alert("Numero Invalido")
        }else{
            this.lista[indice].cambiarApellido("");
            this.lista[indice].cambiarNombre("");
            this.lista[indice].cambiarNumero("");

            
        }

    }

    mostrar(){
        alert("Selecciono Mostrar");
        let indice = prompt("Ingrese un indice");

        if((indice <= 0) || (indice > this.lista.length) ){
            alert("Numero Invalido")
        }else{
            alert(`${indice}: Nombre: ${this.lista[indice].nombre} \nApellido: ${this.lista[indice].apellido} \nNumero: ${this.lista[indice].numero}`);
        }

        
    }

    modificar(){
        alert("Selecciono Modificar");
        this.mostrar();
        let indice = prompt("Seleccione el indice de la persona a modificar");
        if((indice <= 0) || (indice > this.lista.length)){
            alert("Numero Invalido")
        }else{
            
            let modif = prompt("Seleccione que va a modificar Nombre, Apellido o Numero");

            if(modif.toLowerCase() == "nombre"){
                let nombre = prompt("Ingrese nuevo nombre");
                this.lista[indice].cambiarNombre(nombre);
                alert("Nombre cambiado");
            }
            else if(modif.toLowerCase() == "apellido"){
                let apellido = prompt("Ingrese nuevo apellido");
                this.lista[indice].cambiarApellido((apellido));
            }
            else if(modif.toLowerCase() == "numero"){
                let numero = prompt("Ingrese nuevo numero");
                this.lista[indice].cambiarNumero(numero);
            }
            else{
                alert("No selecciono una opcion valida")
            }
        }
    }
}

class Persona{
    constructor(nombre,apellido,numero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.numero = numero;
    }

    cambiarNombre(nombreNuevo){
        this.nombre = nombreNuevo;
    }

    cambiarNumero(numeroNuevo){
        this.numero = numeroNuevo;
    }

    cambiarApellido(apellidoNuevo){
        this.apellido = apellidoNuevo;
    }
}

var agenda = new Agenda();
agenda.menu();