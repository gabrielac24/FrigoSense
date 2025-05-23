import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'http://localhost/frigosense-api';

  constructor(private http: HttpClient) {}

  login(datos: any) {
    return this.http.post(`${this.url}/login.php`, datos);
  }

  register(datos: any) {
    return this.http.post(`${this.url}/registro.php`, datos);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('usuario');
  }

  logout() {
    localStorage.removeItem('usuario');
  }
}
