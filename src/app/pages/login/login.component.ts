import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({ email: this.email, password: this.password }).subscribe((res: any) => {
      if (res.mensaje) {
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
        this.router.navigate(['/home']);
      } else {
        this.error = res.error;
      }
    });
  }
}
