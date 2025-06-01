import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'http://localhost/frigosense-api';

  constructor(private http: HttpClient) {}

  registrarUsuario(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost/frigosense-api/registro.php', data, { headers });
  }
  
  loginUsuario(data: any) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('http://localhost/frigosense-api/login.php', data, { headers });
  }
  
  contacto(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost/frigosense-api/contacto.php', data, { headers });
  }
}
