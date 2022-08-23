import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fecha: number = Date.now();
  hora: any;
  isAuthenticated: boolean = false;
  route: string = '';
  currentRoute: string = '';
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private location: Location, private router: Router) {
  }

  ngOnInit(): void {
    this.mostrarHora();
    this.auth.isAuthenticated$.subscribe((success: boolean) => {
      this.isAuthenticated = success;
    });
  }

  mostrarHora() {
    this.hora = new Date();
    setInterval(() => {
      this.hora = new Date();

    }, 1000);
  }

  public logout(): void {
    this.auth.logout({ returnTo: this.document.location.origin, })
  }

  public login(): void {
    this.route = this.location.path();
    this.auth.loginWithRedirect({
      appState: { target: this.route }
    });

  }

}


