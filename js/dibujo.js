//Accedo  al elemento en el cual canvas me permite realizar el dibujo
var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var trazos = document.getElementById("txt_lineas");
var boton = document.getElementById("btn_dibujar");
boton.addEventListener("click", dibujarPorClick);

/*
var pos = 0;

// ciclo while
while (pos < 500)
{
    dibujarLinea("#0fb3db", 0, pos, pos+10, 500);
    pos = pos + 10;
}

//ciclo for
pos = 0;
for (pos = 0; pos < 500; pos = pos + 10)
{
    var posy = 500 - (pos + 10);
    dibujarLinea("#0fb3db", 500, pos, posy, 500);
    console.log(posy);
    //pos = pos + 10;
}
*/

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
    //--Comenzar o Arrancar un trazo
    lienzo.beginPath();
    //--Color de la Linea
    lienzo.strokeStyle = color;
    //-- moveTo() metodo de canvas para mover el lapiz a donde va arrancar la linea
    lienzo.moveTo(x_inicial, y_inicial);
    //lineTo() es el metodo para trazar una linea hasta el punto que querramos
    lienzo.lineTo(x_final, y_final);
    //-- stroke() es el metodo que nos dibujamos la linea con el estilo que le dimos con la variable strokeStyle
    lienzo.stroke();
    // -- por ultimo cerramos el trazo o levantamos el lapiz
    lienzo.closePath();

}

function dibujarPorClick()
{

    lienzo.clearRect(0, 0, d.width, d.height);
    var lineas = parseInt(trazos.value);
    var ancho = d.width;
    var espacio = ancho / lineas;
    var l= 0;
    while (l < lineas) 
    {
        psy = l * espacio;
        psx = (l+1) * espacio;
        dibujarLinea("#0fb3db", 0, psy, psx, 500);
        dibujarLinea("#0fb3db", 0, 500-psy, psy, 0);
        dibujarLinea("#0fb3db", 500, psy, 500-psx, 500);
        dibujarLinea("#0fb3db", 500, 500-psy, 500-psx, 0);
        l++;
        
    }
    dibujarLinea("#11608a", 1, 1, 1, 499);
    dibujarLinea("#11608a", 1, 1, 499, 1);
    dibujarLinea("#11608a", 499, 1, 499, 499);
    dibujarLinea("#11608a", 499, 499, 1, 499);
}