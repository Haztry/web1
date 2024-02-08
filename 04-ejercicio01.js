// **
//  * Crea una clase libro
//  * La clase libro tendra titulo, autor, a;o y genero
//  * Crea un metodo que devuelva toda la informacion del libro
//  * 
//  * Pide 3 libros y guardalos en un array
//  * 
//  * Los libros se introduciran al arrancar el programa pidiendo los datos con un prompt
//  * Validar que los campos no se introduzcan vacios
//  * Validar que el año sea un numero y que tenga 4 digitos
//  * Validar que el genero sea: aventuras, terror o fantasia
//  * 
//  * crea una funcion que muestre todos los libros
//  * crea una funcion que muestre los autores oredenados alfabeticamenete
//  * crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan
//     a ese genero usando un metodo que devuelva la informacion
//  */

class Libro {
   constructor(titulo, autor, anio, genero){
       this.titulo = titulo
       this.autor = autor
       this.anio = anio
       this.genero = genero
   }
   
   informacionLibro() {
       return `${this.titulo} es un libro de ${this.genero} escrito por ${this.autor} en el año de ${this.anio}.`;
   }

    mostrarLibros(libros){
       console.log("Los libros disponibles son:");
       libros.forEach(libro => {
           console.log(libro.informacionLibro());
       });
   }
}

let libros = [];
while (libros.length < 3) {
   let titulo = prompt("Ingrese el título del libro:");
   let autor = prompt("Ingrese el nombre del autor del libro:");
   let anio = prompt("Ingrese el año de publicación del libro:");
   let genero = prompt("Ingrese el género del libro:");

   if (titulo != '' && autor != '' && !isNaN(anio) && anio.length == 4 && (
       genero =='aventura' || genero == 'terror' || genero == 'fantasia')){

       let libro = new Libro(titulo,autor,anio,genero)
       libros.push(libro)
   }
   else{
       alert("Algo hiciste mal")
   }
}

Libro.mostrarLibros(libros);
