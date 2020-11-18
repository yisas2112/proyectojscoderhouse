
let cursoInscripto = new Curso();
$(function(){
  $("#cursoSeleccionado").hide();
})

//ID dónde se creará la info solicitada por el usuario
let hHtml = CursosDom.obtenerElementoID('#horariohtml');

//Borra los cursos que están abiertos para que no se llene de información la pantalla
CursosDom.borrar(hHtml,'.contenedorCSS');
CursosDom.borrar(hHtml,'.contenedorJs');
CursosDom.borrar(hHtml,'.contenedorReact');
CursosDom.borrar(hHtml,'.contenedorMk');


//Creación de div con los horarios y precio de los cursos
function verHorariosHTML(valor){
  if(valor == 'horarios'){        
    if($('#horariohtml').children().length < 3){
      $.get('js/datos.json',callBackGet);
      function callBackGet(data,status){
        for(const datos of data){
          for(const dato1 of datos["1. Html"]){  
              let contenedor = CursosDom.crearElemento("div");
              CursosDom.agregarID(contenedor,'html');                      
              let titulo = CursosDom.crearElemento("h4");                                                       
              CursosDom.agregarClase(contenedor,"contenedorHTML");                      
              CursosDom.agregarClase(contenedor,"list_horarios");
              CursosDom.agregarINNER(titulo,dato1.diayhorario);                            
              CursosDom.agregarHijo(titulo,` $${dato1.precio}`);
              CursosDom.agregarHijo(contenedor,titulo);        
              CursosDom.agregarHijo(hHtml ,contenedor);
              let boton = CursosDom.crearElemento("button");
              CursosDom.agregarID(boton, dato1.id);
              CursosDom.agregarClase(boton,"btn__elegir");  
              CursosDom.agregarINNER(boton, "Elegir");
              CursosDom.agregarHijo(contenedor,boton);                     
              cursoInscripto.nombre = 'HTML';
              CursosDom.agregaEvento(boton, "click", validadCursoHTML);        
              CursosDom.mostrar(boton,'#cursoSeleccionado');                
              CursosDom.ocultar(boton,'#listadodeCursos');                          
              console.log(status);
            }
          } 
        }               
    }
  }
};

//ID dónde se creará la info solicitada por el usuario
let hCss = CursosDom.obtenerElementoID("#horariocss");
//Borra los cursos que están abiertos para que no se llene de información la pantalla
CursosDom.borrar(hCss,'.contenedorHTML');
CursosDom.borrar(hCss,'.contenedorJs');
CursosDom.borrar(hCss,'.contenedorReact');
CursosDom.borrar(hCss,'.contenedorMk');

//Creación de div con los horarios y precio de los cursos
function verHorariosCSS(valor){
  if(valor == 'horarios'){
    if($('#horariocss').children().length < 3){
      $.get('js/datos.json',callBackGet);
      function callBackGet(data,status){                    
        for(const datos of data){
          for(const dato1 of datos["2. Css"]){
            let contenedor = CursosDom.crearElemento("div");
            let titulo = CursosDom.crearElemento("h4");            
            CursosDom.agregarClase(contenedor,"contenedorCSS");
            CursosDom.agregarClase(contenedor,"list_horarios");
            CursosDom.agregarINNER(titulo,dato1.diayhorario);
            CursosDom.agregarHijo(titulo,` $${dato1.precio}`);            
            CursosDom.agregarHijo(contenedor,titulo);
            CursosDom.agregarHijo(hCss,contenedor);
            let boton = CursosDom.crearElemento("button");
            CursosDom.agregarID(boton, dato1.id);
            CursosDom.agregarClase(boton,"btn__elegir");
            CursosDom.agregarINNER(boton, "Elegir");
            CursosDom.agregarHijo(contenedor,boton);
            cursoInscripto.nombre = 'CSS';
            CursosDom.agregaEvento(boton, "click", validadCursoCSS);
            CursosDom.mostrar(boton,'#cursoSeleccionado');                
            CursosDom.ocultar(boton,'#listadodeCursos');                
            console.log(status);
          }
        }
      }
    }
  }
};

//ID dónde se creará la info solicitada por el usuario
let hJS = CursosDom.obtenerElementoID("#horariojs");

//Borra los cursos que están abiertos para que no se llene de información la pantalla
CursosDom.borrar(hJS,'.contenedorHTML');
CursosDom.borrar(hJS,'.contenedorCSS');
CursosDom.borrar(hJS,'.contenedorReact');
CursosDom.borrar(hJS,'.contenedorMk');

//Creación de div con los horarios y precio de los cursos
function verHorariosJS(valor){
  if(valor == 'horarios'){
    if($('#horariojs').children().length < 3){
      $.get('js/datos.json',callBackGet);
      function callBackGet(data,status){                    
        for(const datos of data){
          for(const dato1 of datos["3. Javascript"]){            
            let contenedor = CursosDom.crearElemento("div");
            let titulo = CursosDom.crearElemento("h4");            
            CursosDom.agregarClase(contenedor,"contenedorJs");
            CursosDom.agregarClase(contenedor,"list_horarios");
            CursosDom.agregarINNER(titulo,dato1.diayhorario);
            CursosDom.agregarHijo(titulo,` $${dato1.precio}`);            
            CursosDom.agregarHijo(contenedor,titulo);
            CursosDom.agregarHijo(hJS,contenedor);
            let boton = CursosDom.crearElemento("button");
            CursosDom.agregarID(boton, dato1.id);
            CursosDom.agregarClase(boton,"btn__elegir");
            CursosDom.agregarINNER(boton, "Elegir");
            CursosDom.agregarHijo(contenedor,boton);  
            cursoInscripto.nombre = 'Javascript';
            CursosDom.agregaEvento(boton, "click", validadCursoJS);
            CursosDom.mostrar(boton,'#cursoSeleccionado');                
            CursosDom.ocultar(boton,'#listadodeCursos');                        
            console.log(status);
          }
        }
      }
    } 
  } 
};

//ID dónde se creará la info solicitada por el usuario
let hReact = CursosDom.obtenerElementoID("#horarioR");

//Borra los cursos que están abiertos para que no se llene de información la pantalla
CursosDom.borrar(hReact,'.contenedorHTML');
CursosDom.borrar(hReact,'.contenedorCSS');
CursosDom.borrar(hReact,'.contenedorJs');
CursosDom.borrar(hReact,'.contenedorMk');

//Creación de div con los horarios y precio de los cursos
function verHorariosR(valor){
  if(valor == 'horarios'){
    if($('#horarioR').children().length < 3){
      $.get('js/datos.json',callBackGet);
      function callBackGet(data,status){                    
        for(const datos of data){
          for(const dato1 of datos["4. React"]){                
            let contenedor = CursosDom.crearElemento("div");
            let titulo = CursosDom.crearElemento("h4");            
            CursosDom.agregarClase(contenedor,"contenedorReact");
            CursosDom.agregarClase(contenedor,"list_horarios");
            CursosDom.agregarINNER(titulo,dato1.diayhorario);
            CursosDom.agregarHijo(titulo,` $${dato1.precio}`);            
            CursosDom.agregarHijo(contenedor,titulo);
            CursosDom.agregarHijo(hReact,contenedor);
            let boton = CursosDom.crearElemento("button");
            CursosDom.agregarID(boton, dato1.id);
            CursosDom.agregarClase(boton,"btn__elegir");
            CursosDom.agregarINNER(boton, "Elegir");
            CursosDom.agregarHijo(contenedor,boton);
            cursoInscripto.nombre = 'React';
            CursosDom.agregaEvento(boton, "click", validadCursoR);  
            CursosDom.mostrar(boton,'#cursoSeleccionado');                
            CursosDom.ocultar(boton,'#listadodeCursos');                 
            console.log(status);
          }
        }
      }    
    }
  }
}

//ID dónde se creará la info solicitada por el usuario
let hMK = CursosDom.obtenerElementoID("#horarioMk");
//Borra los cursos que están abiertos para que no se llene de información la pantalla
CursosDom.borrar(hMK,'.contenedorHTML');
CursosDom.borrar(hMK,'.contenedorCSS');
CursosDom.borrar(hMK,'.contenedorJs');
CursosDom.borrar(hMK,'.contenedorReact');

//Creación de div con los horarios y precio de los cursos
function verHorariosMK(valor){
  if(valor == 'horarios'){
    if($('#horarioMk').children().length < 5){
      $.get('js/datos.json',callBackGet);
      function callBackGet(data,status){                    
        for(const datos of data){
          for(const dato1 of datos["5. Marketing digital"]){               
            let contenedor = CursosDom.crearElemento("div");
            let titulo = CursosDom.crearElemento("h4");            
            CursosDom.agregarClase(contenedor,"contenedorMk");
            CursosDom.agregarClase(contenedor,"list_horarios");
            CursosDom.agregarINNER(titulo,dato1.diayhorario);
            CursosDom.agregarHijo(titulo,` $${dato1.precio}`);            
            CursosDom.agregarHijo(contenedor,titulo);
            CursosDom.agregarHijo(hMK,contenedor);
            let boton = CursosDom.crearElemento("button");
            CursosDom.agregarID(boton, dato1.id);
            CursosDom.agregarClase(boton,"btn__elegir");
            CursosDom.agregarINNER(boton, "Elegir");
            CursosDom.agregarHijo(contenedor,boton);
            cursoInscripto.nombre = 'Marketing Digital';                
            CursosDom.agregaEvento(boton, "click", validadCursoMK); 
            CursosDom.mostrar(boton,'#cursoSeleccionado');                
            CursosDom.ocultar(boton,'#listadodeCursos');
            console.log(status);
          }
        }
      }    
    }
  }
};

//Valida si el curso existe en la base de datos
function validadCursoHTML(e){
  let target = e.target;    
  cursoInscripto.id = target.id;  
  target.disabled = true;    

  $.get('js/datos.json',callBackGet);
    function callBackGet(data){                    
          for(const datos of data){
            for(const dato1 of datos["1. Html"]){ 
                if (target.id == dato1.id){      
                cursoInscripto.diaHorario  =  dato1.diayhorario;
                cursoInscripto.precio = 15000;  
                CursosDom.cargadePagina(verCursoElegido(cursoInscripto));                   
                break;     
                }
            }
          }
    }
}

//Valida si el curso existe en la base de datos
function validadCursoCSS(e){
  let target = e.target;    
  cursoInscripto.id = target.id;  
  target.disabled = true;    

  $.get('js/datos.json',callBackGet);
  
  function callBackGet(data){                    
          for(const datos of data){
            for(const dato1 of datos["2. Css"]){  
              if (target.id == dato1.id){      
              cursoInscripto.diaHorario  =  dato1.diayhorario;
              cursoInscripto.precio = 10000;
              CursosDom.cargadePagina(verCursoElegido(cursoInscripto));
              console.log(cursoInscripto);
              break;     
              }

            }
          }
  }
}

//Valida si el curso existe en la base de datos
function validadCursoJS(e){
  let target = e.target;    
  cursoInscripto.id = target.id;  
  target.disabled = true;    

  $.get('js/datos.json',callBackGet);
  
  function callBackGet(data){                    
          for(const datos of data){
            for(const dato1 of datos["3. Javascript"]){  
              if (target.id == dato1.id){ 
              cursoInscripto.diaHorario  =  dato1.diayhorario;
              cursoInscripto.precio = 15000;
              CursosDom.cargadePagina(verCursoElegido(cursoInscripto));
              console.log(cursoInscripto);
              break;     
              }
            }    
          } 
  }
}

//Valida si el curso existe en la base de datos
function validadCursoR(e){
  let target = e.target;    
  cursoInscripto.id = target.id;  
  target.disabled = true;
  
  $.get('js/datos.json',callBackGet);
  
  function callBackGet(data){                    
          for(const datos of data){
            for(const dato1 of datos["4. React"]){  
              if (target.id == dato1.id){ 
              cursoInscripto.diaHorario  =  dato1.diayhorario;
              cursoInscripto.precio = 15000;
              CursosDom.cargadePagina(verCursoElegido(cursoInscripto));
              console.log(cursoInscripto);
              break;     
              }
            }    
          }
        }       
}


//Valida si el curso existe en la base de datos
function validadCursoMK(e){
  let target = e.target;    
  cursoInscripto.id = target.id;  
  target.disabled = true;    

  $.get('js/datos.json',callBackGet);
  
  function callBackGet(data){                    
    for(const datos of data){
      for(const dato1 of datos["5. Marketing digital"]){  
        if (target.id == dato1.id){ 
        cursoInscripto.diaHorario  =  dato1.diayhorario;
        CursosDom.cargadePagina(verCursoElegido(cursoInscripto));
        console.log(cursoInscripto);
        break;     
        }
      }    
    }
  }       
}



//Muestra el curso seleccionado por el usuario
let cursoCompleto = CursosDom.obtenerElementoID('#title');
function verCursoElegido(valor){
  let cursoFinal = valor
  let elemento =  CursosDom.crearElemento("div");
  let titulo = CursosDom.crearElemento("h1");
  CursosDom.agregarClase(elemento,'m-auto')  ;
  CursosDom.agregarClase(titulo,"h1");
  CursosDom.agregarINNER(titulo,"Curso Seleccionado:");
  CursosDom.agregarHijo(elemento,titulo);
  CursosDom.agregarHijo(cursoCompleto,elemento);
  let contenedor1 = CursosDom.crearElemento("div");    
  let nombre = CursosDom.crearElemento("h3");
  CursosDom.agregarClase(nombre,"h3");
  let contenido = cursoFinal.verCursoSeleccionado();
  CursosDom.agregarINNER(nombre,contenido);
  CursosDom.agregarHijo(elemento,contenedor1);
  CursosDom.agregarHijo(contenedor1,nombre);
}


let personaForm = new Persona();
let mensaje = CursosDom.obtenerElementoID('#mensajeFinal');



function obtenerDatos(){  
  personaForm.nombre = CursosDom.obtenerElementoID('#nombre').value;
  personaForm.apellido = CursosDom.obtenerElementoID('#apellido').value;
  personaForm.mail = CursosDom.obtenerElementoID('#mail').value;
  let element = CursosDom.crearElemento("div");
  let titulo = CursosDom.crearElemento("h1");
  CursosDom.agregarID(element, "mensaje");
  CursosDom.agregarClase(titulo, 'h1');
  let contenido = personaForm.mensajeButton();
  CursosDom.agregarHijo(mensaje,element);
  CursosDom.agregarINNER(titulo, contenido);
  CursosDom.agregarHijo(element, titulo);
  let elemento = CursosDom.obtenerElementoID("#cursoSeleccionado");
  CursosDom.ocultarElement(elemento);
  
};
  
    
