class Billete
{
  constructor(valor, cantidad, nombre)
  {
    this.imagen = new Image();
    this.valor = valor;
    this.cantidad = cantidad;
    this.nombre = nombre;
    this.imagen.src = imagenes[this.nombre]
  }
}

var imagenes = [];
imagenes["cincuenta"]="img/cincuenta.jpg";
imagenes["veinte"]="img/veinte.jpg";
imagenes["diez"]="img/diez.jpg";
imagenes["cinco"]="img/cinco.jpg";

var caja = [];

caja.push(new Billete(50, 10, "cincuenta"));
caja.push(new Billete(20, 20, "veinte"));
caja.push(new Billete(10, 30, "diez"));
caja.push(new Billete(5, 50, "cinco"));

var totalDinero = 0;
var digitos = "";

var resultado = document.getElementById("resultado");
var cantidad = document.getElementById("cantidad");
var saldo = document.getElementById("saldo");
var foto = document.getElementById("fotos");

dineroDisponible();

//BOTONES DEL TECLADO
var bUno = document.getElementById("Uno");
bUno.addEventListener("click", escribirUno);
function escribirUno(){digitos += "1"; cantidad.innerHTML = digitos;}

var bDos = document.getElementById("Dos");
bDos.addEventListener("click", escribirDos);
function escribirDos(){digitos += "2"; cantidad.innerHTML = digitos;}

var bTres = document.getElementById("Tres");
bTres.addEventListener("click", escribirTres);
function escribirTres(){digitos += "3"; cantidad.innerHTML = digitos;}

var bCuatro = document.getElementById("Cuatro");
bCuatro.addEventListener("click", escribirCuatro);
function escribirCuatro(){digitos += "4"; cantidad.innerHTML = digitos;}

var bCinco = document.getElementById("Cinco");
bCinco.addEventListener("click", escribirCinco);
function escribirCinco(){digitos += "5"; cantidad.innerHTML = digitos;}

var bSeis = document.getElementById("Seis");
bSeis.addEventListener("click", escribirSeis);
function escribirSeis(){digitos += "6"; cantidad.innerHTML = digitos;}

var bSiete = document.getElementById("Siete");
bSiete.addEventListener("click", escribirSiete);
function escribirSiete(){digitos += "7"; cantidad.innerHTML = digitos;}

var bOcho = document.getElementById("Ocho");
bOcho.addEventListener("click", escribirOcho);
function escribirOcho(){digitos += "8"; cantidad.innerHTML = digitos;}

var bNueve = document.getElementById("Nueve");
bNueve.addEventListener("click", escribirNueve);
function escribirNueve(){digitos += "9"; cantidad.innerHTML = digitos;}

var bCero = document.getElementById("Cero");
bCero.addEventListener("click", escribirCero);
function escribirCero()
{
  if(digitos != "")
  {
    digitos += "0"
    cantidad.innerHTML = digitos;
  }
}

var bBorrar = document.getElementById("Borrar");
bBorrar.addEventListener("click", borrarDigito);
function borrarDigito()
{
  if(digitos != "")
  {
    digitos = digitos.slice(0,-1);  //elimina elementos de un string
    cantidad.innerHTML = digitos;
  }
  else
  {
    limpiar();
  }
}

var bCancelar = document.getElementById("Cancelar");
bCancelar.addEventListener("click", limpiar);
function limpiar()
{
  digitos = "";
  cantidad.innerHTML = digitos;
  cantidad.innerHTML = "\"Cuando dinero desea retirar\"";
  resultado.innerHTML = "";
  foto.innerHTML = "";
}

var bEnter = document.getElementById("Enter");
bEnter.addEventListener("click", entregarDinero);
//FIN BOTONES

function entregarDinero()
{
  var div;
  var papeles;
  var entregado = [];

  if(digitos != "")
  {
    var dinero = parseInt(digitos);
    entregado = [];

    for(var billete of caja)
    {
      if (dinero > 0)
      {
        div = Math.floor(dinero / billete.valor);
        if(div > billete.cantidad)
        {
          papeles = billete.cantidad;
        }
        else
        {
          papeles = div;
        }
        entregado.push(new Billete(billete.valor, papeles, billete.nombre));
        dinero = dinero - (billete.valor * papeles);
      }
    }

    limpiar();

    if (totalDinero == 0)
    {
      resultado.innerHTML = "No hay saldo disponible";
    }
    else if(dinero > totalDinero)
    {
      resultado.innerHTML = "No te puedo entregar esa cantidad!";
    }
    else if(dinero == 0)
    {
      for (var e in entregado)
      {
        if(entregado[e].cantidad > 0)
        {
          resultado.innerHTML += entregado[e].cantidad + " Billetes de $ " + entregado[e].valor + "<br />"
          resultado.appendChild(entregado[e].imagen)
          resultado.innerHTML += "<br />"
          caja[e].cantidad = caja[e].cantidad - entregado[e].cantidad;
        }
      }
      dineroDisponible();
    }
    else
    {
      resultado.innerHTML = "Imposible procesar tu transacción!";
    }
  }
}

function dineroDisponible()
{
  totalDinero = 0;
  for(var billete of caja)
  {
    totalDinero += billete.valor * billete.cantidad;
  }
  saldo.innerHTML = "El cajero dispone de: " + totalDinero;
}