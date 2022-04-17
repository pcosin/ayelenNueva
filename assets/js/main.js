
const productos = [{

    id:1,
    nombre:"santi",
    precio:100,
    },{

    id:2,
    nombre:"juan",
    precio:200,
    },{

    id:3,
    nombre:"rosa",
    precio:300,
    },
  

];

class Producto {
    constructor(nombre, precio, id){
    this.nombre = nombre;
    this.precio = precio;
    this.id = id }



}


function pedirProducto() {
    let nombre = prompt("Ingrese su nombre");
    let precio = prompt("Ingrese precio");
    let id = prompt("Ingrese su ID");

    let producto = new Producto(nombre, precio, id);
    console.log(producto)
    nuevoProducto = Object.entries(producto)
    productos.push(nuevoProducto)

    return producto;
}

pedirProducto()






console.log(productos)
