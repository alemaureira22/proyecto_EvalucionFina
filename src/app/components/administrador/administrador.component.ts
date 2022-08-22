import { Component, OnInit, Input} from '@angular/core';
import { Productos } from 'src/app/services/productos';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  @Input() productos:Productos[] =[]
  titulo : string = 'Listado productos';

  optionSort: { property: string | null, order : string } = { property : null, order : 'asc' };

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

  ordenarListadoProductos (property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order : order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
  }

  public eliminarProducto(producto: Productos): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary m-2',
        cancelButton: 'btn btn-danger m-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `Seguro que deseas eliminar al producto ${producto.nombreProducto}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Me arrepiento!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosService.deleteProducto(producto.id).subscribe(
          response => {
            this.productos = this.productos.filter(pro => pro != producto)
            swalWithBootstrapButtons.fire('Eliminado!','Has eliminado el producto indicado','success')
          }
        )
      }
    })
  }

}
