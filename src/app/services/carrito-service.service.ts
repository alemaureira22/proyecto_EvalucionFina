import { Injectable } from '@angular/core';
import { Productos } from './productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

    productoComprado:Productos= new Productos;

 
constructor() { }
generarProductoCarrito(codigo:number){
  let indice = this.datosProductos.findIndex((producto:any)=>producto.id === codigo);
  this.productoComprado = this.datosProductos[indice];
 

}
 datosProductos= [
        {
            "id": 1,
            "nombreProducto": "pop corn small",
            "precio": 5000,
            "stock": 10,
            "descripcionProducto": "200gr de pop corn dulce o salado",
            "imagen": "https://i.imgur.com/VjqYoA1.png"
        },
        {
            "id": 2,
            "nombreProducto": "pop corn medium",
            "precio": 8000,
            "stock": 10,
            "descripcionProducto": "350gr de pop corn dulce o salado",
            "imagen": "https://i.imgur.com/VjqYoA1.png"
        },
        {
            "id": 3,
            "nombreProducto": "pop corn large",
            "precio": 10000,
            "stock": 10,
            "descripcionProducto": "500gr de pop corn dulce o salado",
            "imagen": "https://i.imgur.com/VjqYoA1.png"
        },
        {
            "id": 4,
            "nombreProducto": "combo pop corn familiar",
            "precio": 10,
            "stock": 150000,
            "descripcionProducto": "500gr de pop corn dulce o salado + dos bebidas medianas",
            "imagen": "https://i.imgur.com/zaqbz6p.png"
        },
        {
            "id": 5,
            "nombreProducto": "bebida chica",
            "precio": 1500,
            "stock": 10,
            "descripcionProducto": "500ml Coca-cola, Sprite, Fanta",
            "imagen": "https://i.imgur.com/P4KEqgB.png"
        },
        {
            "id": 6,
            "nombreProducto": "bebida mediana",
            "precio": 2500,
            "stock": 10,
            "descripcionProducto": "800ml Coca-cola, Sprite, Fanta",
            "imagen": "https://i.imgur.com/P4KEqgB.png"
        },
        {
            "id": 7,
            "nombreProducto": "bebida grande",
            "precio": 3500,
            "stock": 10,
            "descripcionProducto": "1000ml Coca-cola, Sprite, Fanta",
            "imagen": "https://i.imgur.com/P4KEqgB.png"
        },
        {
            "id": 8,
            "nombreProducto": "papas fritas",
            "precio": 1500,
            "stock": 10,
            "descripcionProducto": "500gr papa lays",
            "imagen": "https://i.imgur.com/6hZfdO7.png"
        },
        {
            "id": 9,
            "nombreProducto": "m&m",
            "precio": 2000,
            "stock": 10,
            "descripcionProducto": "Caramelo de chocolate con leche",
            "imagen": "https://i.imgur.com/gYvGc5L.png"
        },
        {
            "id": 10,
            "nombreProducto": "cheetos",
            "precio": 1500,
            "stock": 10,
            "descripcionProducto": "250gr evercrips",
            "imagen": "https://i.imgur.com/roNwJv1.png"
        },
        {
            "id": 11,
            "nombreProducto": "chocolate",
            "precio": 2500,
            "stock": 10,
            "descripcionProducto": "500gr chocolate blanco",
            "imagen": "https://i.imgur.com/F0FepuH.png"
        },
        {
            "id": 12,
            "nombreProducto": "cofee",
            "precio": 1000,
            "stock": 10,
            "descripcionProducto": "200ml cafe americano",
            "imagen": "https://i.imgur.com/MWW9Q1X.png"
        }
    ]
}