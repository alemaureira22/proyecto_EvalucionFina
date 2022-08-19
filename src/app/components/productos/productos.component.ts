import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/services/productos';
import {ProductosService} from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() productos:Productos[] =[]


  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productosService.getProductos().subscribe(
      (data) => {
        this.productos = data.productos;
        console.log(this.productos);
        
      }
    );
  }

}
