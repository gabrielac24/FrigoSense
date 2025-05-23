import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoticiResult } from '../interfaces/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  constructor(private http:HttpClient) { }

  getUsers(catego: string) {
    return this.http.get<NoticiResult>(`https://newsapi.org/v2/top-headlines?country=us&category=${catego}&apiKey=a497f9fb14974230835b90dd7b88fc5e`);
  }
}
