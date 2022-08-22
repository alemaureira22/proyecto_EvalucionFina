import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError, map} from 'rxjs';
import {Productos} from './productos';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  private urlEndPoint: string = 'http://localhost:8088/api/productos';

  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});  

  constructor(private http: HttpClient, private router: Router) { }

  getProductos() : Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  } 

  getProducto(id: number): Observable<Productos> {
    return this.http.get<Productos>(`${this.urlEndPoint}/${id}`)
  }
    
  deleteProducto(id:number): Observable<Productos>{
    return this.http.delete<Productos>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    );
  }

  createProducto(producto: Productos): Observable<any> {
    return this.http.post(this.urlEndPoint, producto, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.empleado as Productos),
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    );
  }

  // consultar 
  updateProducto(producto: Productos): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${producto.id}`,producto,{headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    );
  }
}