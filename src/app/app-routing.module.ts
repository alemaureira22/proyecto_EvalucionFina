import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
   },
 {
  path: 'home', redirectTo: '',

  },
  {
    path: 'nosotros', component:NosotrosComponent ,
  
    },
    {
      path: 'carritoCompras', component:CarritoComprasComponent,
    
      },
      {
        path: '404', component:Pagina404Component,
      
        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
