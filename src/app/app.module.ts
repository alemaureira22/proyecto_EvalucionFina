
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarritoServiceService } from './services/carrito-service.service';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { FormularioComponent } from './components/administrador/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListPipe } from './pipes/order-list.pipe';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import localeES from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
registerLocaleData(localeES, 'es');


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
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule, 
    NgxPaginationModule,
    AuthModule.forRoot(environment.auth0),
  

    
  ],
  providers: [
    CarritoServiceService,
    ReactiveFormsModule,
    FormsModule,
    
   
    {
      provide: LOCALE_ID, 
      useValue: 'es-CL'
    }
],
  
  bootstrap: [AppComponent]
})
export class AppModule { }