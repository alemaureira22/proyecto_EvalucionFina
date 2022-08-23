import { Component, Input, OnInit } from '@angular/core';
import { CarritoServiceService } from 'src/app/services/carrito-service.service';
import { Productos } from 'src/app/services/productos';



@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
@Input() codigoProducto : any

carrito:any = []; 
productoCarrito:any = {};
producto:any = {};
cantidadesTotal:any;
totalPrecioCarrito:any; 



  constructor(private productoCompradoService:CarritoServiceService,) { }

  ngOnInit(): void {}
  recibirPedidoCompra(codigoProducto: any) {

    let productoDuplicado

    productoDuplicado = this.carrito.some((producto:any) => producto.id === codigoProducto ) // verifica que el codigo de producto recibido no este en otro producto del carrito
    
    if(productoDuplicado){ // si el producto ya esta en el carrito, salta al metodo para sumar productos
      this.sumarProducto(codigoProducto);
      return
    }

    this.productoCompradoService.generarProductoCarrito(codigoProducto); //llama al servicio y genera un objeto que es el producto que se quiere comprar 
    this.productoCarrito = this.productoCompradoService.productoComprado;
    
  
    Object.defineProperty(this.productoCarrito, "cantidad", {value:1, writable:true}); // se le agrega la propiedad "cantidad"    
    this.armarCarrito(this.productoCarrito);
    this.sumaCantidades();
    this.totalCarrito();
  }

  armarCarrito(object:any) { 
    this.carrito.push(object);      
  }
  sumarProducto(id:number){
    // toma el codigo del producto, lo busca en el array y aumenta su cantidad
    let indiceTarea = this.carrito.findIndex( (element: any) => element.id === id);
    
    this.carrito[indiceTarea].cantidad ++;
   
    this.sumaCantidades();
    this.totalCarrito();
  } 
  restarProducto(id:number){
    // toma el codigo del producto, lo busca en el array y dismuye su cantidad
    let indiceTarea = this.carrito.findIndex( (element: any) => element.id === id);
    
    this.carrito[indiceTarea].cantidad --;

    if(this.carrito[indiceTarea].cantidad === 0){ //si la cantidad es cero, elimina el producto del carrito
      this.carrito = this.carrito.filter(function(carrito:any){
        return carrito.id !== id;
      });
    }
    this.restaCantidades();
    this.totalCarrito();
   
  }

  sumaCantidades(){
    // mapea el array (carrito) buscando la propiedad cantidad en cada elemento y suma sus valores
    this.cantidadesTotal = this.carrito.map((item: { cantidad: any; }) => item.cantidad).reduce((prev: any, curr: any) => prev + curr, 0);
    this.totalCarrito()  
  
  }

  restaCantidades(){    
    this.cantidadesTotal = this.cantidadesTotal - 1;
    this.totalCarrito()
     
  }

  vaciarCarrito(){
    this.carrito = [];
    this.cantidadesTotal = 0;
    this.totalPrecioCarrito = 0;
  }
  totalCarrito(){
    //para cada elemnto del carrito, multiplica la cantidad por el precio y lo acumula en subtotal
    let subTotal:number = 0;
    this.carrito.forEach(function(producto:any) {
      
      subTotal = subTotal + (producto.cantidad * producto.precio)
  
      console.log(subTotal);
      });
      this.totalPrecioCarrito = subTotal;
    
  }



//  agregarCarrito(): void{
//   this.totalCantidad = 0;
//   this.total = 0;
//   this.producto=[];

//  }
}