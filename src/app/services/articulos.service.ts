// articulos.service.ts
import { Injectable } from '@angular/core';
import { Article } from '../models/articulo.model'; 

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private articles: Article[] = [
    // Artículo destacado (Nutrición)
    {
      id: 1,
      category: 'Nutrición',
      title: '¿Los carbohidratos engordan? Descubre la verdad',
      date: '15 Junio 2023',
      readTime: '8 min lectura',
      image: './assets/img/carbohidratos.png',
      excerpt: 'Uno de los mitos más persistentes en nutrición es que los carbohidratos son el enemigo número uno de la pérdida de peso.',
      myth: 'Debes eliminar todos los carbohidratos para bajar de peso',
      truth: 'Los carbohidratos de calidad son esenciales para una dieta equilibrada',
      content: 'Contenido completo del artículo...',
      author: 'Dr. Nutrición'
    },
    // Más artículos de Nutrición
    {
      id: 4,
      category: 'Nutrición',
      title: 'El mito de las dietas altas en proteínas',
      date: '20 Junio 2023',
      readTime: '7 min lectura',
      image: './assets/img/proteinas.png',
      excerpt: '¿Realmente necesitamos tanta proteína como promueven algunas dietas?',
      myth: 'Mientras más proteína consumas, más músculo ganarás',
      truth: 'El exceso de proteína se convierte en energía o se almacena como grasa',
      content: 'Contenido completo del artículo...',
      author: 'Dr. Nutrición'
    },
    {
      id: 5,
      category: 'Nutrición',
      title: 'Los alimentos "light" no son siempre la mejor opción',
      date: '18 Junio 2023',
      readTime: '5 min lectura',
      image: './assets/img/light.png',
      excerpt: 'La verdad sobre los productos light y su impacto real en la pérdida de peso',
      myth: 'Los productos light ayudan automáticamente a perder peso',
      truth: 'Muchos productos light contienen otros ingredientes poco saludables',
      content: 'Contenido completo del artículo...',
      author: 'Nutricionista Salud'
    },
    {
      id: 6,
      category: 'Nutrición',
      title: 'El mito de no comer después de las 8pm',
      date: '12 Junio 2023',
      readTime: '6 min lectura',
      image: './assets/img/cena.png',
      excerpt: '¿Realmente importa la hora en que comes o solo lo que comes?',
      myth: 'Comer después de las 8pm engorda más',
      truth: 'Lo que importa es el total calórico diario, no la hora de consumo',
      content: 'Contenido completo del artículo...',
      author: 'Dra. Alimentación'
    },
    // Artículos de Ejercicio
    {
      id: 2,
      category: 'Ejercicio',
      title: 'Sudar más no significa quemar más grasa',
      date: '10 Junio 2023',
      readTime: '6 min lectura',
      image: 'assets/img/ejercicio.png',
      excerpt: 'Muchas personas creen que mientras más suden durante el ejercicio, más grasa están perdiendo.',
      myth: 'Sudar mucho significa que estás quemando más grasa',
      truth: 'La sudoración es un mecanismo de refrigeración del cuerpo',
      content: 'Contenido completo del artículo...',
      author: 'Entrenador Activo'
    },
    {
      id: 7,
      category: 'Ejercicio',
      title: 'El mito de los abdominales para perder barriga',
      date: '22 Junio 2023',
      readTime: '7 min lectura',
      image: 'assets/img/abdominales.png',
      excerpt: 'Hacer cientos de abdominales no es la solución para tener un vientre plano',
      myth: 'Los ejercicios abdominales queman la grasa localizada',
      truth: 'No se puede reducir grasa en zonas específicas con ejercicios localizados',
      content: 'Contenido completo del artículo...',
      author: 'Entrenador Fitness'
    },
    {
      id: 8,
      category: 'Ejercicio',
      title: 'Cardio vs Pesas: ¿Cuál es mejor?',
      date: '17 Junio 2023',
      readTime: '9 min lectura',
      image: 'assets/img/cardio-pesas.png',
      excerpt: 'Descubre qué tipo de ejercicio es más efectivo para tus objetivos',
      myth: 'El cardio es mejor que las pesas para perder peso',
      truth: 'La combinación de ambos es la estrategia más efectiva',
      content: 'Contenido completo del artículo...',
      author: 'Coach Deportivo'
    },
    {
      id: 9,
      category: 'Ejercicio',
      title: 'El mito de que el ejercicio quema muchas calorías',
      date: '14 Junio 2023',
      readTime: '5 min lectura',
      image: 'assets/img/calorias.png',
      excerpt: 'La realidad sobre cuántas calorías realmente quemas al ejercitarte',
      myth: 'Una sesión de ejercicio te permite comer lo que quieras',
      truth: 'La alimentación es clave, el ejercicio complementa',
      content: 'Contenido completo del artículo...',
      author: 'Entrenador Consciente'
    },
    // Artículos de Dietas
    {
      id: 3,
      category: 'Dietas',
      title: 'Las dietas extremas no son la solución a largo plazo',
      date: '5 Junio 2023',
      readTime: '10 min lectura',
      image: 'assets/img/dieta.png',
      excerpt: 'Las dietas de moda que prometen pérdidas de peso rápidas suelen ser ineficaces.',
      myth: 'Mientras más rápida sea la pérdida de peso, mejor',
      truth: 'La pérdida de peso saludable y sostenible es gradual',
      content: 'Contenido completo del artículo...',
      author: 'Lic. Saludable'
    },
    {
      id: 10,
      category: 'Dietas',
      title: 'El peligro de las dietas detox',
      date: '25 Junio 2023',
      readTime: '8 min lectura',
      image: 'assets/img/detox.png',
      excerpt: 'Por qué las dietas detox pueden ser más dañinas que beneficiosas',
      myth: 'Necesitas desintoxicar tu cuerpo regularmente',
      truth: 'Tu cuerpo ya tiene sistemas naturales de desintoxicación',
      content: 'Contenido completo del artículo...',
      author: 'Dra. Ciencia'
    },
    {
      id: 11,
      category: 'Dietas',
      title: 'El mito de los superalimentos',
      date: '19 Junio 2023',
      readTime: '6 min lectura',
      image: 'assets/img/superalimentos.png',
      excerpt: 'No existe un alimento mágico para la pérdida de peso',
      myth: 'Algunos alimentos queman grasa milagrosamente',
      truth: 'Ningún alimento por sí solo causa pérdida de peso significativa',
      content: 'Contenido completo del artículo...',
      author: 'Nutricionista Real'
    },
    {
      id: 12,
      category: 'Dietas',
      title: 'Ayuno intermitente: ¿milagro o moda?',
      date: '13 Junio 2023',
      readTime: '9 min lectura',
      image: 'assets/img/ayuno.png',
      excerpt: 'La verdad científica detrás del ayuno intermitente',
      myth: 'El ayuno intermitente es la mejor estrategia para todos',
      truth: 'Puede ser útil para algunos pero no es una solución universal',
      content: 'Contenido completo del artículo...',
      author: 'Dr. Evidencia'
    }
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }

  getArticlesByCategory(category: string): Article[] {
    return this.articles.filter(article => article.category === category);
  }
}