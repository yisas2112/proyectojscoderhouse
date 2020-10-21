
let cursoInscripto = new Curso();
$(function(){
  $("#cursoSeleccionado").hide();
})


let hHtml = CursosDom.obtenerElementoID('#horariohtml');
CursosDom.ocultar(hHtml,'.contenedorCSS');
CursosDom.ocultar(hHtml,'.contenedorJs');
CursosDom.ocultar(hHtml,'.contenedorReact');
CursosDom.ocultar(hHtml,'.contenedorMk');

function verHorariosHTML(valor) {
    if(valor == 'horarios'){
      for(const datos of listadoCursos["1. Html"]){                
        let contenedor = CursosDom.crearElemento("div");
        let titulo = CursosDom.crearElemento("h4");
        CursosDom.agregarClase(contenedor,"card");                 
        CursosDom.agregarClase(contenedor,"contenedorHTML");                 
        CursosDom.agregarINNER(titulo,datos.diayhorario);
        CursosDom.agregarClase(titulo, 'text-secondary');
        CursosDom.agregarHijo(contenedor,titulo);        
        CursosDom.agregarHijo(hHtml ,contenedor);
        let boton = CursosDom.crearElemento("button");
        CursosDom.agregarID(boton, datos.id);
        CursosDom.agregarClase(boton,"btn-success");  
        CursosDom.agregarINNER(boton, "Elegir");
        CursosDom.agregarHijo(contenedor,boton);                     
        cursoInscripto.nombre = 'HTML';
        CursosDom.agregaEvento(boton, "click", validadCursoHTML);        
        CursosDom.mostrar(boton,'#cursoSeleccionado');                
        CursosDom.ocultar(boton,'#listadodeCursos');        
       // CursosDom.agregaEvento(hHtml,"click",detenerButton);
    }
    
  }    
};


let hCss = CursosDom.obtenerElementoID("#horariocss");
CursosDom.ocultar(hCss,'.contenedorHTML');
CursosDom.ocultar(hCss,'.contenedorJs');
CursosDom.ocultar(hCss,'.contenedorReact');
CursosDom.ocultar(hCss,'.contenedorMk');

function verHorariosCSS(valor) {
    if(valor == 'horarios'){
      for(const datos of listadoCursos["2. Css"]){
        let contenedor = CursosDom.crearElemento("div");
        let titulo = CursosDom.crearElemento("h4");
        CursosDom.agregarClase(contenedor,"card");
        CursosDom.agregarClase(contenedor,"contenedorCSS");
        CursosDom.agregarINNER(titulo,datos.diayhorario);
        CursosDom.agregarClase(titulo, 'text-secondary');
        CursosDom.agregarHijo(contenedor,titulo);
        CursosDom.agregarHijo(hCss,contenedor);
        let boton = CursosDom.crearElemento("button");
        CursosDom.agregarID(boton, datos.id);
        CursosDom.agregarClase(boton,"btn-success");
        CursosDom.agregarINNER(boton, "Elegir");
        CursosDom.agregarHijo(contenedor,boton);
        cursoInscripto.nombre = 'CSS';
        CursosDom.agregaEvento(boton, "click", validadCursoCSS);
        CursosDom.mostrar(boton,'#cursoSeleccionado');                
        CursosDom.ocultar(boton,'#listadodeCursos');                
        CursosDom.agregaEvento(hCss,"click",detenerButton);
    }
  }    
}

let hJS = CursosDom.obtenerElementoID("#horariojs");
CursosDom.ocultar(hJS,'.contenedorHTML');
CursosDom.ocultar(hJS,'.contenedorCSS');
CursosDom.ocultar(hJS,'.contenedorReact');
CursosDom.ocultar(hJS,'.contenedorMk');

function verHorariosJS(valor) {
    if(valor == 'horarios'){
      for(const datos of listadoCursos["3. Javascript"]){
        let contenedor = CursosDom.crearElemento("div");
        let titulo = CursosDom.crearElemento("h4");
        CursosDom.agregarClase(contenedor,"card");
        CursosDom.agregarClase(contenedor,"contenedorJs");
        CursosDom.agregarINNER(titulo,datos.diayhorario);
        CursosDom.agregarClase(titulo, 'text-secondary');
        CursosDom.agregarHijo(contenedor,titulo);
        CursosDom.agregarHijo(hJS,contenedor);
        let boton = CursosDom.crearElemento("button");
        CursosDom.agregarID(boton, datos.id);
        CursosDom.agregarClase(boton,"btn-success");
        CursosDom.agregarINNER(boton, "Elegir");
        CursosDom.agregarHijo(contenedor,boton);  
        cursoInscripto.nombre = 'Javascript';
        CursosDom.agregaEvento(boton, "click", validadCursoJS);
        CursosDom.mostrar(boton,'#cursoSeleccionado');                
        CursosDom.ocultar(boton,'#listadodeCursos');        
        CursosDom.agregaEvento(hJS,"click",detenerButton);
    }
    
  }    
}

let hReact = CursosDom.obtenerElementoID("#horarioR");
CursosDom.ocultar(hReact,'.contenedorHTML');
CursosDom.ocultar(hReact,'.contenedorCSS');
CursosDom.ocultar(hReact,'.contenedorJs');
CursosDom.ocultar(hReact,'.contenedorMk');

function verHorariosR(valor) {
    if(valor == 'horarios'){
      for(const datos of listadoCursos["4. React"]){
        let contenedor = CursosDom.crearElemento("div");
        let titulo = CursosDom.crearElemento("h4");
        CursosDom.agregarClase(contenedor,"card");
        CursosDom.agregarClase(contenedor,"contenedorReact");
        CursosDom.agregarINNER(titulo,datos.diayhorario);
        CursosDom.agregarClase(titulo, 'text-secondary');
        CursosDom.agregarHijo(contenedor,titulo);
        CursosDom.agregarHijo(hReact,contenedor);
        let boton = CursosDom.crearElemento("button");
        CursosDom.agregarID(boton, datos.id);
        CursosDom.agregarClase(boton,"btn-success");
        CursosDom.agregarINNER(boton, "Elegir");
        CursosDom.agregarHijo(contenedor,boton);
        cursoInscripto.nombre = 'React';
        CursosDom.agregaEvento(boton, "click", validadCursoR);  
        CursosDom.mostrar(boton,'#cursoSeleccionado');                
        CursosDom.ocultar(boton,'#listadodeCursos');      
        CursosDom.agregaEvento(hReact,"click",detenerButton);
    }
  }    
}

let hMK = CursosDom.obtenerElementoID("#horarioML");
CursosDom.ocultar(hMK,'.contenedorHTML');
CursosDom.ocultar(hMK,'.contenedorCSS');
CursosDom.ocultar(hMK,'.contenedorJs');
CursosDom.ocultar(hMK,'.contenedorReact');

function verHorariosMK(valor){
    if(valor == 'horarios'){
      for(const datos of listadoCursos["5. Marketing digital"]){
        let contenedor = CursosDom.crearElemento("div");
        let titulo = CursosDom.crearElemento("h4");
        CursosDom.agregarClase(contenedor,"card");
        CursosDom.agregarClase(contenedor,"contenedorMk");
        CursosDom.agregarINNER(titulo,datos.diayhorario);
        CursosDom.agregarClase(titulo, 'text-secondary');
        CursosDom.agregarHijo(contenedor,titulo);
        CursosDom.agregarHijo(hMK,contenedor);
        let boton = CursosDom.crearElemento("button");
        CursosDom.agregarID(boton, datos.id);
        CursosDom.agregarClase(boton,"btn-success");
        CursosDom.agregarINNER(boton, "Elegir");
        CursosDom.agregarHijo(contenedor,boton);
        cursoInscripto.nombre = 'Markergin Digital';                
        CursosDom.agregaEvento(boton, "click", validadCursoMK); 
        CursosDom.mostrar(boton,'#cursoSeleccionado');                
        CursosDom.ocultar(boton,'#listadodeCursos');       
        CursosDom.agregaEvento(hMK,"click",detenerButton);    
          
    }
  }    

};

function detenerButton(e){
  let target = e.target;      
  target.disabled = true;    
};



function validadCursoHTML(e){
  let target = e.target;    
  cursoInscripto.id = target.id;  
  target.disabled = true;    

  for(const cursoExiste of listadoCursos["1. Html"]){
    if (target.id == cursoExiste.id){      
     cursoInscripto.diaHorario  =  cursoExiste.diayhorario;  
     CursosDom.cargadePagina(verCursoElegido(cursoInscripto));                   
     break;     
    }

  }
}



function validadCursoCSS(e){
  let target = e.target;    
  cursoInscripto.id = target.id;  
  target.disabled = true;    

  for(const cursoExiste of listadoCursos["2. Css"]){
    if (target.id == cursoExiste.id){      
     cursoInscripto.diaHorario  =  cursoExiste.diayhorario;
     CursosDom.cargadePagina(verCursoElegido(cursoInscripto));
     console.log(cursoInscripto);
     break;     
    }

  }
}

function validadCursoJS(e){
  let target = e.target;    
  cursoInscripto.id = target.id;  
  target.disabled = true;    

  for(const cursoExiste of listadoCursos["3. Javascript"]){
    if (target.id == cursoExiste.id){      
     cursoInscripto.diaHorario  =  cursoExiste.diayhorario;
     CursosDom.cargadePagina(verCursoElegido(cursoInscripto));
     console.log(cursoInscripto);
     break;     
    }

  }
}

function validadCursoR(e){
  let target = e.target;    
  cursoInscripto.id = target.id;  
  target.disabled = true;    

  for(const cursoExiste of listadoCursos["4. React"]){
    if (target.id == cursoExiste.id){      
     cursoInscripto.diaHorario  =  cursoExiste.diayhorario;
     CursosDom.cargadePagina(verCursoElegido(cursoInscripto));
     console.log(cursoInscripto);
     break;     
    }

  }
}



function validadCursoMK(e){
  let target = e.target;    
  cursoInscripto.id = target.id;  
  target.disabled = true;    

  for(const cursoExiste of listadoCursos["5. Marketing digital"]){
    if (target.id == cursoExiste.id){      
     cursoInscripto.diaHorario  =  cursoExiste.diayhorario;  
     CursosDom.cargadePagina(verCursoElegido(cursoInscripto));   
     console.log(cursoInscripto);
     break;     
    }

  }
}


let cursoCompleto = CursosDom.obtenerElementoID('#title');
function verCursoElegido(valor){
  let cursoFinal = valor
  let elemento =  CursosDom.crearElemento("div");
  let titulo = CursosDom.crearElemento("h1");
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







