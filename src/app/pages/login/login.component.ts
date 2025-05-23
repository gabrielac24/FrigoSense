import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formularioLogin: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit() {
    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      return;
    }

    const datos = this.formularioLogin.value;

    this.auth.loginUsuario(datos).subscribe({
    next: (res: any) => {
      console.log('respuesta login:', res);
      if (res.mensaje) {
        localStorage.setItem('usuario', JSON.stringify(res.usuario)); // 👈 esta línea es la clave
        this.router.navigate(['/home']);
      } else {
        this.mensaje = res.error || 'No se pudo iniciar sesión';
      }
    },
    error: (err) => {
      console.error('❌ Error de conexión:', err);
      this.mensaje = 'No se pudo conectar al servidor';
    }
    });
  }
}
