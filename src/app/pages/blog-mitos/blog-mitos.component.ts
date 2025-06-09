import { Component } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { Article } from '../../models/articulo.model';
import { ArticuloDetalleComponent } from '../articulo-detalle/articulo-detalle.component';

@Component({
  selector: 'app-blog-mitos',
  templateUrl: './blog-mitos.component.html',
  styleUrls: ['./blog-mitos.component.css']
})
export class BlogMitosComponent {
  articles: Article[] = [];
  featuredArticle: Article | undefined;

  constructor(private articulosService: ArticulosService) {
    this.articles = this.articulosService.getArticles();
    this.featuredArticle = this.articles[0];
  }
}