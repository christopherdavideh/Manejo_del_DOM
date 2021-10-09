class Puchamon
{
    constructor(nombre, vida, ataque)
    {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagen.src = imagenes[this.nombre]; 
    }

    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<h3><strong>" + this.nombre + "</strong></h3>");
        document.write("<strong>Vida: </strong>" + this.vida + "<br>")
        document.write("<strong>Ataque: </strong>" + this.ataque + "<hr>")
    }
}