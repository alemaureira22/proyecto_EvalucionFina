import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Productos} from './productos';



@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn:'root'
})
export class ProductosService {
  private urlEndPoint: string = 'http://localhost:8088/api/productos';

  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});  

  constructor(private http: HttpClient, private router: Router) { }

  getProductos() : Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  } 

  getProducto(id: number): Observable<Productos> {
    return this.http.get<Productos>(`${this.urlEndPoint}/${id}`).pipe()
     
        
      }
    
    }

  

