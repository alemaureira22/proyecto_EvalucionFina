import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { CarritoServiceService } from 'src/app/services/carrito-service.service';

import { Productos } from 'src/app/services/productos';
import {ProductosService} from 'src/app/services/productos.service';
import { CarritoComprasComponent } from '../carrito-compras/carrito-compras.component';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() productos:Productos[] =[]
  @Output() eventoDeCompra = new EventEmitter<Number>();
  producto :any =[];
  id:any="";
  productoComprado:any={}

  enviarPedidoCompra(value: number) { //envia el codigo del producto a comprar (como un evento) al componente carrito
    this.eventoDeCompra.emit(value);
    }
  

  


  constructor(private cargarProductosService:CarritoServiceService) { }

  ngOnInit(): void {
    //this.obtenerProductos();
    this.mostrarProductos();
  
  }

  // obtenerProductos(): void {
  //   this.productosService.getProductos().subscribe(
  //     (data) => {
  //       this.productos = data.productos;
  //       console.log(this.productos);
        
  //     }
  //   );
  // }
  mostrarProductos(){
    // llama al servicio con los datos y los guarda en el array
    this.productos = this.cargarProductosService.datosProductos;    
  }


  
}
 

  
