// blog-mitos.component.ts
import { Component } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { Article } from '../../models/articulo.model';

@Component({
  selector: 'app-blog-mitos',
  templateUrl: './blog-mitos.component.html',
  styleUrls: ['./blog-mitos.component.css']
})
export class BlogMitosComponent {
  featuredArticle: Article;
  nutritionArticles: Article[] = [];
  exerciseArticles: Article[] = [];
  dietArticles: Article[] = [];

  constructor(private articulosService: ArticulosService) {
    const allArticles = this.articulosService.getArticles();
    this.featuredArticle = allArticles[0]; // Primer artículo como destacado
    
    // Filtramos los artículos por categoría, excluyendo el destacado
    this.nutritionArticles = this.articulosService.getArticlesByCategory('Nutrición')
      .filter(a => a.id !== this.featuredArticle.id);
    this.exerciseArticles = this.articulosService.getArticlesByCategory('Ejercicio');
    this.dietArticles = this.articulosService.getArticlesByCategory('Dietas');
  }
}