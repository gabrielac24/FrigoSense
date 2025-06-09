import { Injectable } from '@angular/core';
import { Article } from '../models/articulo.model'; 

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private articles: Article[] = [
    {
      id: 1,
      category: 'Nutrición',
      title: '¿Los carbohidratos engordan? Descubre la verdad',
      date: '15 Junio 2023',
      readTime: '8 min lectura',
      image: './assets/img/carbohidratos.png',
      excerpt: 'Uno de los mitos más persistentes en nutrición es que los carbohidratos son el enemigo número uno de la pérdida de peso. Pero ¿qué dice realmente la ciencia?',
      myth: 'Debes eliminar todos los carbohidratos para bajar de peso',
      truth: 'Los carbohidratos de calidad son esenciales para una dieta equilibrada y pueden ser parte de un plan de pérdida de peso saludable',
      content: `
        <p>Uno de los mitos más comunes en torno a la pérdida de peso es que todos los carbohidratos son malos. Esta idea ha llevado a muchas personas a eliminar por completo este macronutriente de su dieta, lo que no solo es innecesario, sino también contraproducente.</p>

        <h2>¿Qué son los carbohidratos?</h2>
        <p>Los carbohidratos son una fuente principal de energía para el cuerpo. Se encuentran en alimentos como frutas, verduras, legumbres, cereales y productos derivados. No todos los carbohidratos son iguales; hay simples (azúcares) y complejos (almidones y fibra).</p>

      

        <h2>¿Por qué se demonizan los carbohidratos?</h2>
        <p>Las dietas bajas en carbohidratos han ganado popularidad por su efectividad a corto plazo. Sin embargo, la pérdida de peso inicial suele deberse a la pérdida de agua, no de grasa.</p>

        <h2>¿Qué dice la ciencia?</h2>
        <p>Estudios han demostrado que incluir carbohidratos complejos en una dieta balanceada no solo es saludable, sino que también puede favorecer la pérdida de peso cuando se acompaña de ejercicio y control de porciones.</p>

        <p>En resumen: no todos los carbohidratos son malos. La clave está en elegir opciones saludables y mantener una dieta variada.</p>
      `,
      author: 'Dr. Nutrición'
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
      truth: 'La sudoración es un mecanismo de refrigeración del cuerpo y no está directamente relacionado con la quema de grasa',
      content: `
        <p>Es común ver a personas en el gimnasio usando ropa térmica o haciendo ejercicio en ambientes muy calurosos, creyendo que cuanto más suden, más grasa queman. Sin embargo, esta creencia no está respaldada por la ciencia.</p>

        <h2>¿Qué es realmente el sudor?</h2>
        <p>El sudor es la forma en que nuestro cuerpo regula la temperatura. Cuando hacemos ejercicio, nuestra temperatura corporal aumenta y el sudor ayuda a enfriarnos. La cantidad de sudor depende de varios factores: genética, nivel de hidratación, temperatura ambiente y tipo de ejercicio.</p>

        <h2>Sudar ≠ quemar grasa</h2>
        <p>Perder peso tras un entrenamiento muy sudoroso suele deberse a la pérdida de líquidos, no de grasa. Esta pérdida se recupera tan pronto como te rehidratas. Para quemar grasa, lo que importa es el balance calórico: gastar más calorías de las que consumes.</p>

        <h2>Lo que sí funciona para quemar grasa</h2>
        <ul>
          <li>Realizar actividad física de forma constante</li>
          <li>Combinar ejercicios cardiovasculares y de fuerza</li>
          <li>Mantener una alimentación equilibrada</li>
          <li>Descansar adecuadamente</li>
        </ul>

        <p>No te dejes llevar por los mitos. En lugar de buscar sudar más, enfócate en entrenar con intensidad y cuidar tu alimentación.</p>
      `,
      author: 'Entrenador Activo'
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
      truth: 'La pérdida de peso saludable y sostenible es gradual, de aproximadamente 0.5-1 kg por semana',
      content: `
        <p>Las dietas extremas, como aquellas que eliminan grupos enteros de alimentos o reducen drásticamente las calorías, pueden parecer una solución rápida para perder peso. Sin embargo, suelen ser insostenibles y potencialmente peligrosas.</p>

        <h2>¿Qué son las dietas extremas?</h2>
        <p>Son planes alimenticios muy restrictivos que prometen resultados rápidos. Ejemplos comunes incluyen la dieta de la piña, ayunos prolongados, o dietas que limitan severamente los carbohidratos o las grasas.</p>

        <h2>Riesgos de seguir dietas extremas</h2>
        <ul>
          <li>Pérdida de masa muscular</li>
          <li>Deficiencias nutricionales</li>
          <li>Efecto rebote (recuperación rápida del peso perdido)</li>
          <li>Alteraciones en el metabolismo</li>
        </ul>

        <h2>¿Cuál es la mejor alternativa?</h2>
        <p>Adoptar hábitos sostenibles a largo plazo. Comer con moderación, incluir todos los grupos de alimentos, mantenerse activo físicamente y priorizar el bienestar general. La pérdida de peso saludable suele ser de 0.5 a 1 kg por semana.</p>

        <p>Recuerda: no se trata solo de perder peso, sino de ganar salud.</p>
      `,
      author: 'Lic. Saludable'
    }
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }
}