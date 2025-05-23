import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private router: Router) {}

  irALogin() {
    this.router.navigate(['/login']);
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  email: string = '';
password: string = '';
error: string = '';

login() {
  console.log('Email:', this.email);
  console.log('Password:', this.password);
  // Aquí podrías hacer this.router.navigate(['/home']);
}

}
