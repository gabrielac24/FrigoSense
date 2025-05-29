import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private router: Router) {}

  irALogin() {
    // this.router.navigate(['/login'], { state: {dato: "DESARROLLO DE APLICACIONES WEB"} });
    this.router.navigate(['/login'], { state: {dato: "<h1>HOLA MUNDO</h1>"} });
  }
  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  blogMitos() {
    this.router.navigate(['/blog-mitos']);
  }
}
