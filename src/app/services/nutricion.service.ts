import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  // Asegúrate de importar Observable

@Injectable({
  providedIn: 'root'
})
export class NutricionService {
  private apiUrl = 'https://api.api-ninjas.com/v1/nutrition';
  private apiKey = '5ehkH934msZoGP9bJfHArw==8R2IOuB1A11BdnE2'; // Reemplaza con tu API key

  constructor(private http: HttpClient) {}

  obtenerInformacionNutricional(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });

    return this.http.get<any>(`${this.apiUrl}?query=${encodeURIComponent(query)}`, { headers });
  }
}
