import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fecha: number = Date.now();
  hora: any;

  constructor() { }

  ngOnInit(): void {
    this.mostrarHora();
  }

  mostrarHora(){
    this.hora = new Date();
    setInterval(()=>{
      this.hora = new Date();

    }, 1000);
  }

}
