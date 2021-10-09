var imagenes = [];
imagenes["Cauchin"] = "img/vaca.png";
imagenes["Pokacho"] = "img/pollo.png";
imagenes["Tocinauro"] = "img/cerdo.png";

var cauchin = new Puchamon("Cauchin", 100, 30);

var coleccion = [];
coleccion.push(new Puchamon("Cauchin", 100, 40));
coleccion.push(new Puchamon("Pokacho", 80, 50));
coleccion.push(new Puchamon("Tocinauro", 120, 60));


for (const poke of coleccion) 
{
    poke.mostrar();
}    