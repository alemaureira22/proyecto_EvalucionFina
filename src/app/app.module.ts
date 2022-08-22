
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { FormularioComponent } from './components/administrador/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListPipe } from './pipes/order-list.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NosotrosComponent,
    CarritoComprasComponent,
    Pagina404Component,
    ProductosComponent,
    AdministradorComponent,
    FormularioComponent,
    OrderListPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }