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
        //document.body.appendChild(this.imagen);
        document.write("<div class='card mb-3' style='max-width: 440px;'>");
        document.write("<div class='row g-0'>");
        document.write("<div class='col-md-4'>");
        document.write("<img src='"+ imagenes[this.nombre] +"' width='150' alt='"+ this.nombre +"' />" );
        document.write("</div>");
        document.write("<div class='col-md-8 p-4'>");
        document.write("<h3><strong>" + this.nombre + "</strong></h3>");
        document.write("<p class='card-text'><strong class='text-success'><i class='fa-solid fa-heart'></i> Vida: </strong>" + this.vida + "<br>")
        document.write("<strong class='text-danger'><i class='fa-solid fa-bolt-lightning'></i>&nbsp; Ataque: </strong>" + this.ataque + "</p>")
        document.write("</div>");
        document.write("</div>");
        document.write("</div>");
    }
}