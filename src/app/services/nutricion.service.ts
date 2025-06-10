import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NutritionItem } from '../interfaces/nutricion';

@Injectable({
  providedIn: 'root'
})
export class NutricionService {
  private apiUrl = 'https://api.api-ninjas.com/v1/nutrition';
  private apiKey = '5ehkH934msZoGP9bJfHArw==8R2IOuB1A11BdnE2'; // Clave de API de api-ninjas

  private unsplashAccessKey = 'o0tRSUoA-9LgDJtA-1HxDtve1deHt1SaRLK9I0_HW2w'; // <-- Reemplaza con tu clave de Unsplash

  constructor(private http: HttpClient) {}

  obtenerInformacionNutricional(query: string): Observable<NutritionItem[]> {
  const headers = new HttpHeaders({
    'X-Api-Key': this.apiKey
  });

  return this.http.get<NutritionItem[]>(`${this.apiUrl}?query=${encodeURIComponent(query)}`, { headers });
}
  buscarImagen(alimento: string): Observable<any> {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(alimento)}&client_id=${this.unsplashAccessKey}`;
    return this.http.get<any>(url);
  }
}
