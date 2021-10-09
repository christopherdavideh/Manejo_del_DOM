var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

var rand = {
    id: "Random"   
};

var randp = {
    id: "Random"   
};


var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var map = "img/tile.png";

// Cargar la Imagen del Mapa
var fondo = new Image();
fondo.src = map;
fondo.addEventListener("load", mostrarMapa);

//Cargar la imagen del Cerdito
var cerdo = new Image();
cerdo.src = "img/cerdo.png";
cerdo.addEventListener("load", mostrarMapa);

//Cargar la imagen del Vaca
var vaca = new Image();
vaca.src = "img/vaca.png";
vaca.addEventListener("load", mostrarMapa);

//Cargar la imagen del Pollo
var gallina = new Image();
gallina.src = "img/pollo.png";
gallina.addEventListener("load", mostrarMapa);


//Cargar la imagen del Lobo
var wolf = new Image();
wolf.src = "img/lobo.png";
wolf.addEventListener("load", mostrarMapa);

var cantidad_v = almacenarRandom(aleatorio(4, 10)); 
//var cantidad_c = aleatorio(2, 11);
var cantidad_p = almacenarRandomP(aleatorio(10, 30));
var cantidad_l = aleatorio(1, 2);

var pos_x = 10; 
var pos_y = 10;

var boton = document.getElementById("nuevo");
boton.addEventListener("click", recargar);

document.addEventListener("keydown", moverCerdo);
  

function moverCerdo(evento)
{
    var movimiento = 5;
    switch (evento.keyCode) {
        case teclas.LEFT:
            
            if (pos_x > 5) {                  
                pos_x = pos_x - movimiento;
                //limpiar();
                mostrarMapa();
            }  
            else
            {
                pos_x = 1;
                //limpiar();
                mostrarMapa();
            } 
            console.log(pos_x + ", " + pos_y);
            break;
        case teclas.UP:
            if (pos_y > 5) {
                pos_y = pos_y - movimiento;
                //limpiar();
                mostrarMapa();
            }
            else
            {
                pos_y = 1;
                //limpiar();
                mostrarMapa();
            }
            console.log(pos_x + ", " + pos_y); 
            break;
        case teclas.RIGHT:
            if (pos_x < 430) {
                pos_x = pos_x + movimiento;
                //limpiar();
                mostrarMapa();
            }
            else
            {
                pos_x = 430;
                //limpiar();
                mostrarMapa();
            } 
            console.log(pos_x + ", " + pos_y);   
            break;
        case teclas.DOWN:
            if (pos_y < 430) {
                pos_y = pos_y + movimiento;
                //limpiar();
                mostrarMapa();
            }
            else
            {
                y = 430;
                //limpiar();
                mostrarMapa();
            }
            console.log(pos_x + ", " + pos_y);     
            break;            
    
        default:
            //alert("Presiona la tecla correcta para dibujar");
            break;
            
    }
}

function recargar()
{
    location.reload();
}

function almacenarRandom(cantidad){

    var result_x = new Array();
    var result_y = new Array();
    for (var v = 0; v < cantidad; v++) 
    {
        var x = aleatorio(1, 7);
        var y = aleatorio(1, 10);
        x = x * 60;
        y = y * 40;
        result_x.push(x);
        result_y.push(y);
        rand.posx = result_x;
        rand.posy = result_y;     
    }
    
    return rand;

}

function almacenarRandomP(cantidad){

    var result_x = new Array();
    var result_y = new Array();
    for (var v = 0; v < cantidad; v++) 
    {
        var x = aleatorio(1, 9);
        var y = aleatorio(1, 20);
        x = x * 45;
        y = y * 21; 
        result_x.push(x);
        result_y.push(y);
        randp.posx = result_x;
        randp.posy = result_y;     
    }
    
    return randp;

}

function mostrarMapa()
{
    papel.drawImage(fondo, 0, 0);
    papel.drawImage(cerdo, pos_x, pos_y);

    for (let i = 0; i < cantidad_v.posx.length; i++) {
        papel.drawImage(vaca, cantidad_v.posx[i], cantidad_v.posy[i]);
    }

    for (let i = 0; i < cantidad_p.posx.length; i++) {
        papel.drawImage(gallina, cantidad_p.posx[i], cantidad_p.posy[i]);
    }

    /*console.log(cantidad_p);
    for (var v = 0; v < cantidad_p; v++) 
    {
        var x = aleatorio(1, 9);
        var y = aleatorio(1, 20);
        x = x * 45;
        y = y * 21; 
        papel.drawImage(gallina, x, y);
        
    }*/
    
    console.log(cantidad_l);
    for (var v = 0; v < cantidad_l; v++) 
    {
        var x = aleatorio(1, 7);
        var y = aleatorio(1, 10);
        x = x * 60;
        y = y * 40; 
        papel.drawImage(wolf, x, y);
        
    }
    
}

function aleatorio(min , max)
{
    var result;
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function limpiar(){
    papel.clearRect(0, 0, vp.width , vp.height );
}