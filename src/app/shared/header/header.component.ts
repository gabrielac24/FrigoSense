import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  nombreUsuario: string | null = null;
  mostrarMenuUsuario: boolean = false;

  constructor(private router: Router, private scroller: ViewportScroller) {}

  ngOnInit() {
    const usuario = localStorage.getItem('usuario');
    this.nombreUsuario = usuario ? JSON.parse(usuario).nombre : null;
  }

  irALogin() {
    this.router.navigate(['/login'], { state: { dato: "<h1>HOLA MUNDO</h1>" } });
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/inicio']);
    this.mostrarMenuUsuario = false;
  }

  blogMitos() {
    this.router.navigate(['/blog-mitos']);
  }

  toggleMenuUsuario() {
    this.mostrarMenuUsuario = !this.mostrarMenuUsuario;
  }

  irASeccion(id: string) {
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          this.scroller.scrollToAnchor(id);
        }, 100);
      });
    } else {
      this.scroller.scrollToAnchor(id);
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideMenu = target.closest('.user-menu');
    if (!clickedInsideMenu) {
      this.mostrarMenuUsuario = false;
    }
  }
}
