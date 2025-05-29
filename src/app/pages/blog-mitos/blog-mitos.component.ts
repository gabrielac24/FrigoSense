import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-mitos',
  templateUrl: './blog-mitos.component.html',
  styleUrls: ['./blog-mitos.component.css']
})
export class BlogMitosComponent {
  articles = [
    {
      id: 1,
      category: 'Nutrición',
      title: '¿Los carbohidratos engordan? Descubre la verdad',
      date: '15 Junio 2023 ',
      readTime: ' 8 min lectura',
      image: 'assets/img/carbohidratos.png',
      excerpt: 'Uno de los mitos más persistentes en nutrición es que los carbohidratos son el enemigo número uno de la pérdida de peso. Pero ¿qué dice realmente la ciencia?',
      myth: 'Debes eliminar todos los carbohidratos para bajar de peso',
      truth: 'Los carbohidratos de calidad son esenciales para una dieta equilibrada y pueden ser parte de un plan de pérdida de peso saludable'
    },
    {
      id: 2,
      category: 'Ejercicio',
      title: 'Sudar más no significa quemar más grasa',
      date: '10 Junio 2023 ',
      readTime: ' 6 min lectura',
      image: 'assets/img/ejercicio.png',
      excerpt: 'Muchas personas creen que mientras más suden durante el ejercicio, más grasa están perdiendo. Esto es un mito común en los gimnasios.',
      myth: 'Sudar mucho significa que estás quemando más grasa',
      truth: 'La sudoración es un mecanismo de refrigeración del cuerpo y no está directamente relacionado con la quema de grasa'
    },
    {
      id: 3,
      category: 'Dietas',
      title: 'Las dietas extremas no son la solución a largo plazo',
      date: '5 Junio 2023 ',
      readTime: ' 10 min lectura',
      image: 'assets/img/dieta.png',
      excerpt: 'Las dietas de moda que prometen pérdidas de peso rápidas suelen ser ineficaces y potencialmente peligrosas para la salud.',
      myth: 'Mientras más rápida sea la pérdida de peso, mejor',
      truth: 'La pérdida de peso saludable y sostenible es gradual, de aproximadamente 0.5-1 kg por semana'
    }
  ];

  featuredArticle = this.articles[0];
}