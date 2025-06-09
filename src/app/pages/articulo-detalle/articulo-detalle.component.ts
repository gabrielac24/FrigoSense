import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';
import { Article } from '../../models/articulo.model';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
  article: Article | undefined;
  safeContent: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private articulosService: ArticulosService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.articulosService.getArticleById(id);
    
    if (this.article) {
      this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
    }
  }
}