import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nombre = '';
  email = '';
  telefono = '';
  mensaje = '';
  respuesta = '';

  constructor(private auth: AuthService) {}

  enviarContacto() {
    const data = {
      name: this.nombre,
      email: this.email,
      phone: this.telefono,
      message: this.mensaje
    };

    this.auth.contacto(data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.respuesta = res.mensaje;
      },
      error: (err: any) => {
        console.error(err);
        this.respuesta = 'Error al enviar el mensaje';
      }
    });
  }
}
