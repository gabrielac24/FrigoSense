import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nombre = '';
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  registrar() {
    this.auth.register({ nombre: this.nombre, email: this.email, password: this.password })
      .subscribe((res: any) => {
        if (res.mensaje) {
          alert('Registro exitoso. Ahora inicia sesión.');
          this.router.navigate(['/login']);
        } else {
          this.error = res.error;
        }
      });
  }
}
