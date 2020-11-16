class CursosDom{
    static obtenerElementoID(id){
        return $(id)[0];
    }

    static crearElemento(elemento){
        return document.createElement(elemento);
    }

    static agregarHijo(padre,hijo){
       $(padre).append(hijo);
    }

    static agregarClase(nodo, clase){
        $(nodo).addClass(clase);        
    }

    static agregarID(nodo,id){
        nodo.id = id;
    }

    static agregarINNER(nodo,inner){
        $(nodo).html(inner);
    }

    static agregaEvento(nodo,evento,funcion) {
        $(nodo).click(evento,funcion);

    }

    static cargadePagina(funcion){
        $(funcion);
    }

    static detenerButton(id){
    $(id).attr("disable", true);    
    }
    
    static ocultar(id, elemento){
        $(id).click(function(){
            $(elemento).slideUp(2000);
        })
        
    }
    static ocultarElement(elemento){
        $(function(){
            $(elemento).slideUp(2000);
        })
        
    }
    static mostrar(id, elemento){
        $(id).click(function(){
            $(elemento).slideToggle(2000);
        })
    }
    static borrar(id, elemento){
        $(id).click(function(){
            $(elemento).remove();
        })
        
    }

};

class Curso{
    constructor(id,nombre, diaHorario){
            this.id = id;
            this.nombre = nombre;          
            this.diaHorario = diaHorario;
            }                     
            verCursoSeleccionado() {
                  return "Haz seleccionado el curso de: "+ this.nombre +" "+"Los días "+ this.diaHorario;            
            }          
};

class Persona{
    constructor(nombre, apellido, mail,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
    }

    mensajeButton(){
        return `Gracias ${this.nombre} ${this.apellido} a las brevedad nos comunicaremos con vos para concretar el pago ;)`;
        
    }
}



  

  
