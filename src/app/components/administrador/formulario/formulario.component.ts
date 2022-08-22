import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/services/productos';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  titleCreate : string = "Formulario Registro Nuevos Productos";
  titleUpdate :string = "Formulario Actualización Productos";
  producto : Productos = new Productos();
  submitted : boolean = false;

  form: FormGroup = new FormGroup({
    nombreProducto : new FormControl(''),
    descripcionProducto : new FormControl(''),
    precio: new FormControl(''),
    stock:  new FormControl(''),
    imagen:  new FormControl(''),
  })

  constructor(private formBuilder: FormBuilder, private productoService: ProductosService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getProducto();
    this.form = this.formBuilder.group(
      {
        nombreProducto : [
          '', 
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]
        ],
        descripcionProducto : [
          '', 
          [
            Validators.required, 
            Validators.minLength(15), 
            Validators.maxLength(150)
          ]
        ],
        precio : [
          0, 
          [
            Validators.required,
            Validators.min(0)
          ]
        ],
        stock: [
          0, 
          [
            Validators.required,
            Validators.min(0)
          ]
        ],
        imagen : [
          '', 
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(255)
          ]
        ]      
      }
    );
  }

  get f(): {[key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    console.log(this.producto);
    this.createProducto();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  public createProducto(): void {
    this.productoService.createProducto(this.producto).subscribe(
      producto => {
        this.router.navigate(['/administradorProductos']);
        Swal.fire('Producto nuevo',`El Producto ${producto.nombreProducto}  ha sido registrado satisfactoriamente`,'success');
      }
    );
  }

  public getProducto(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.productoService.getProducto(id).subscribe(
          (producto) => this.producto = producto
        )
      }
    });
  }

  // consultar
  public updateProducto(): void{
    this.productoService.updateProducto(this.producto).subscribe(
      producto => {
        this.router.navigate(['/administradorProductos']);
        Swal.fire('Producto actualizado',`Producto ${producto.nombreProducto} modificado con éxito`,'success');
      }
    );
  }
}
