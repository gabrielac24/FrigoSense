import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formularioValidacion: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.formularioValidacion = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required, Validators.maxLength(12)]],
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]]
    }, { validators: this.verificarPasswords });
  }

  verificarPasswords(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('rePassword')?.value;
    return pass === confirm ? null : { noCoinciden: true };
  }

  submit() {
    if (this.formularioValidacion.invalid) {
      this.formularioValidacion.markAllAsTouched();
      return;
    }

    const datos = this.formularioValidacion.value;

    this.auth.registrarUsuario({
      nombre: datos.nombre,
      email: datos.email,
      password: datos.password
    }).subscribe((res: any) => {
      if (res.mensaje) {
        this.mensaje = 'Usuario registrado con éxito';
        this.formularioValidacion.reset();
        setTimeout(() => this.router.navigate(['/login']), 1500);
      } else {
        this.mensaje = res.mensaje || 'No se pudo registrar';
      }
    });
  }
}
