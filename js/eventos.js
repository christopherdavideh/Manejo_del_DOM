var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

var d = document.getElementById("area_dibujo");
var papel = d.getContext("2d");
var x, y;
var estado;
var modo_dibujo = document.getElementById("modo_dibujo");
var colorcito = document.getElementById("color_dibujo");
var boton = document.getElementById("btn_borrar");
boton.addEventListener("click", borrarDibujo);


modo_dibujo.addEventListener("change", evaluarOpcion);


function evaluarOpcion(event)
{
    console.log(event.target.value);
    if (event.target.value == 1) 
    {
        dibujarLinea(colorcito.value, 1, 1, 1, 499, papel);
        dibujarLinea(colorcito.value, 1, 1, 499, 1, papel);
        dibujarLinea(colorcito.value, 499, 1, 499, 499, papel);
        dibujarLinea(colorcito.value, 499, 499, 1, 499, papel);

        d.removeEventListener("mousedown", pulsarMouse);
        d.removeEventListener("mousemove", dibujarMouse);
        d.removeEventListener("mouseup", soltarMouse);
        // Eventos pantallas táctiles
        d.removeEventListener('touchstart', pulsarMouse, false);
        d.removeEventListener('touchmove', dibujarMouse, false);  

        document.addEventListener("keyup", dibujarTeclado);
        x = 250;
        y = 250;

        dibujarLinea(colorcito.value, x-1, y-1, x+1, y+1, papel);
        
    } 
    else if (event.target.value == 2)
    {
        dibujarLinea(colorcito.value, 1, 1, 1, 499, papel);
        dibujarLinea(colorcito.value, 1, 1, 499, 1, papel);
        dibujarLinea(colorcito.value, 499, 1, 499, 499, papel);
        dibujarLinea(colorcito.value, 499, 499, 1, 499, papel);

        d.addEventListener("mousedown", pulsarMouse);
        d.addEventListener("mousemove", dibujarMouse);
        d.addEventListener("mouseup", soltarMouse);
        // Eventos pantallas táctiles
        d.addEventListener('touchstart', pulsarMouse, false);
        d.addEventListener('touchmove', dibujarMouse, false);  

        document.removeEventListener("keyup", dibujarTeclado);
    }
    else{
        alert("Elige la opcion con la que quieres Dibujar");
        d.removeEventListener("mousedown", pulsarMouse);
        d.removeEventListener("mousemove", dibujarMouse);
        d.removeEventListener("mouseup", soltarMouse);
        // Eventos pantallas táctiles
        d.removeEventListener('touchstart', pulsarMouse, false);
        d.removeEventListener('touchmove', dibujarMouse, false);
        document.removeEventListener("keyup", dibujarTeclado);  

    }
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    //--Comenzar o Arrancar un trazo
    lienzo.beginPath();
    //--Color de la Linea
    lienzo.strokeStyle = color;
    //--Grosor de la Linea
    lienzo.lineWidth = 3;
    lienzo.lineCap = 'round';
    //-- moveTo() metodo de canvas para mover el lapiz a donde va arrancar la linea
    lienzo.moveTo(x_inicial, y_inicial);
    //lineTo() es el metodo para trazar una linea hasta el punto que querramos
    lienzo.lineTo(x_final, y_final);
    //-- stroke() es el metodo que nos dibujamos la linea con el estilo que le dimos con la variable strokeStyle
    lienzo.stroke();
    // -- por ultimo cerramos el trazo o levantamos el lapiz
    lienzo.closePath();

}

function pulsarMouse(event)
{
    estado = 1;
    x = event.layerX;
    y = event.layerY;
}

function dibujarMouse(event)
{
    
    if (estado == 1) 
    {
        dibujarLinea(colorcito.value, x, y, event.layerX, event.layerY, papel);
    }
    
    x = event.layerX;
    y = event.layerY;
       
    console.log(estado);
}

function soltarMouse(event)
{
    estado = 0;
    x = event.layerX;
    y = event.layerY;
}

function borrarDibujo()
{
    papel.clearRect(0, 0, d.width, d.height);
}    

function dibujarTeclado(evento)
{
    var movimiento = 5;
    switch (evento.keyCode) {
        case teclas.LEFT:
            if (x > 5) {
                dibujarLinea(colorcito.value, x, y, x - movimiento, y, papel);
                x = x - movimiento;
            }  
            else
            {
                x = 1;
            } 
            console.log(x + ", " + y);
            break;
        case teclas.UP:
            if (y > 5) {
                dibujarLinea(colorcito.value, x, y, x, y - movimiento, papel);
                y = y - movimiento;
            }
            else
            {
                y = 1;
            }
            console.log(x + ", " + y); 
            break;
        case teclas.RIGHT:
            if (x < 496) {
                dibujarLinea(colorcito.value, x, y, x + movimiento, y, papel);
                x = x + movimiento;
            }
            else
            {
                x = 499;
            } 
            console.log(x + ", " + y);   
            break;
        case teclas.DOWN:
            if (y < 496) {
                dibujarLinea(colorcito.value, x, y, x, y + movimiento, papel);
                y = y + movimiento;
            }
            else
            {
                y = 499;
            }
            console.log(x + ", " + y);     
            break;            
    
        default:
            alert("Presiona la tecla correcta para dibujar");
            break;
            
    }
}