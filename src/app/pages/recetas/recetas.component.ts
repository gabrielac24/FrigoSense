import { Component } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  categorias: string[] = ['Desayuno', 'Almuerzo', 'Cena', 'Snack', 'Postres'];
  recetaSeleccionada: any = null;

  // Recetas con imágenes locales
  recetas = [
    // Desayunos
    {
      nombre: 'Avena con Frutas',
      descripcion: 'Desayuno energético con avena y frutas frescas.',
      imagen: 'assets/img/Avena.avif',
      ingredientes: ['1/2 taza de avena', '1 taza de leche vegetal', '1/2 taza de frutas mixtas', '1 cucharada de miel'],
      pasos: ['Calentar la leche', 'Agregar avena y cocinar a fuego lento', 'Decorar con frutas y miel'],
      tiempoPreparacion: '10 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 280,
        proteinas: '6g',
        grasas: '4g',
        carbohidratos: '45g'
      },
      categoria: 'Desayuno'
    },
    {
      nombre: 'Tostadas con Aguacate',
      descripcion: 'Tostadas integrales con aguacate y huevo.',
      imagen: 'assets/img/Tostadas.jpg',
      ingredientes: ['2 rebanadas de pan integral', '1/2 aguacate', '2 huevos', 'Sal y pimienta al gusto'],
      pasos: ['Tostar el pan', 'Machacar el aguacate', 'Freír los huevos', 'Armar las tostadas'],
      tiempoPreparacion: '15 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 350,
        proteinas: '12g',
        grasas: '18g',
        carbohidratos: '30g'
      },
      categoria: 'Desayuno'
    },
    {
      nombre: 'Smoothie Bowl',
      descripcion: 'Bowl de smoothie cremoso con toppings nutritivos.',
      imagen: 'assets/img/smoothie.jpg',
      ingredientes: ['1 banana congelada', '1/2 taza de frutillas', '1/2 taza de yogurt griego', '1 cucharada de granola', '1 cucharadita de chía'],
      pasos: ['Licuar banana, frutillas y yogurt', 'Servir en un bowl', 'Agregar granola y semillas de chía'],
      tiempoPreparacion: '5 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 250,
        proteinas: '8g',
        grasas: '5g',
        carbohidratos: '45g'
      },
      categoria: 'Desayuno'
    },
    {
      nombre: 'Omelette de Espinacas',
      descripcion: 'Tortilla francesa rellena de espinacas y queso feta.',
      imagen: 'assets/img/omelette.jpg',
      ingredientes: ['3 huevos', '1/2 taza de espinacas frescas', '1/4 taza de queso feta', '1 cucharadita de aceite de oliva', 'Sal y pimienta al gusto'],
      pasos: ['Batir los huevos', 'Saltear espinacas brevemente', 'Cocinar omelette y agregar relleno', 'Doblar y servir'],
      tiempoPreparacion: '12 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 320,
        proteinas: '22g',
        grasas: '24g',
        carbohidratos: '4g'
      },
      categoria: 'Desayuno'
    },
    
    // Almuerzos
    {
      nombre: 'Ensalada de quinoa',
      descripcion: 'Almuerzo ligero y completo con quinoa y vegetales frescos.',
      imagen: 'assets/img/Ensalada_quinoa.jpg',
      ingredientes: ['1 taza de quinoa cocida', '1/2 taza de pepino picado', '1/2 taza de tomate cherry', '1/4 taza de cebolla morada', '2 cucharadas de aceite de oliva', 'Jugo de 1 limón'],
      pasos: ['Cocinar la quinoa', 'Picar todos los vegetales', 'Mezclar ingredientes', 'Aliñar con aceite y limón', 'Refrigerar por 10 minutos'],
      tiempoPreparacion: '20 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 250,
        proteinas: '8g',
        grasas: '9g',
        carbohidratos: '35g'
      },
      categoria: 'Almuerzo'
    },
    {
      nombre: 'Wrap de Pollo',
      descripcion: 'Wrap integral con pollo, vegetales y aderezo de yogurt.',
      imagen: 'assets/img/Wrap.jpg',
      ingredientes: ['1 tortilla integral grande', '100g de pechuga de pollo', '1/4 taza de lechuga', '1/4 taza de tomate', '2 cucharadas de yogurt griego', '1/2 cucharadita de mostaza'],
      pasos: ['Cocinar el pollo y cortar en tiras', 'Mezclar yogurt con mostaza', 'Extender la tortilla', 'Añadir ingredientes y enrollar'],
      tiempoPreparacion: '15 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 380,
        proteinas: '30g',
        grasas: '10g',
        carbohidratos: '40g'
      },
      categoria: 'Almuerzo'
    },
    {
      nombre: 'Buddha Bowl',
      descripcion: 'Bowls coloridos y nutritivos con granos, proteínas y vegetales.',
      imagen: 'assets/img/buddha.jpg',
      ingredientes: ['1/2 taza de arroz integral', '100g de garbanzos asados', '1/2 taza de brócoli al vapor', '1/4 aguacate', '1 cucharada de tahini', 'Jugo de 1/2 limón'],
      pasos: ['Cocinar arroz integral', 'Asar garbanzos con especias', 'Cocinar al vapor el brócoli', 'Armar el bowl y agregar aderezo'],
      tiempoPreparacion: '25 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 450,
        proteinas: '18g',
        grasas: '15g',
        carbohidratos: '60g'
      },
      categoria: 'Almuerzo'
    },
    {
      nombre: 'Sopa Minestrone',
      descripcion: 'Sopa italiana tradicional llena de vegetales y pasta.',
      imagen: 'assets/img/sopa.jpg',
      ingredientes: ['1 zanahoria', '1 rama de apio', '1/2 taza de pasta integral', '1 lata de tomates picados', '1/2 taza de porotos blancos', '2 tazas de caldo vegetal', '1 cucharada de aceite de oliva'],
      pasos: ['Sofreír zanahoria y apio', 'Agregar tomates y caldo', 'Cocinar por 15 minutos', 'Añadir pasta y porotos', 'Cocinar hasta que la pasta esté al dente'],
      tiempoPreparacion: '30 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 280,
        proteinas: '10g',
        grasas: '7g',
        carbohidratos: '45g'
      },
      categoria: 'Almuerzo'
    },
    
    // Cenas
    {
      nombre: 'Salmón al horno',
      descripcion: 'Salmón al horno con especias y acompañado de vegetales.',
      imagen: 'assets/img/Salmon.jpg',
      ingredientes: ['150g de salmón', '1/2 taza de brócoli', '1/2 taza de zanahoria', '1 cucharada de aceite de oliva', 'Sal y pimienta al gusto', 'Jugo de 1/2 limón'],
      pasos: ['Precalentar horno a 180°C', 'Sazonar el salmón', 'Colocar en bandeja con vegetales', 'Hornear por 20 minutos', 'Exprimir limón al servir'],
      tiempoPreparacion: '25 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 350,
        proteinas: '25g',
        grasas: '20g',
        carbohidratos: '15g'
      },
      categoria: 'Cena'
    },
    {
      nombre: 'Crema de Calabaza',
      descripcion: 'Crema suave de calabaza con un toque de jengibre.',
      imagen: 'assets/img/calabaza.jpg',
      ingredientes: ['2 tazas de calabaza picada', '1/2 taza de cebolla', '1 diente de ajo', '1 cucharadita de jengibre rallado', '2 tazas de caldo de vegetales', '1/4 taza de crema light'],
      pasos: ['Sofreír cebolla y ajo', 'Añadir calabaza y jengibre', 'Agregar caldo y cocinar', 'Licuar hasta obtener crema', 'Añadir crema al servir'],
      tiempoPreparacion: '30 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 180,
        proteinas: '4g',
        grasas: '8g',
        carbohidratos: '25g'
      },
      categoria: 'Cena'
    },
    {
      nombre: 'Pasta Integral con Pesto',
      descripcion: 'Pasta integral con salsa pesto casera y tomates cherry.',
      imagen: 'assets/img/pasta.jpg',
      ingredientes: ['150g de pasta integral', '1 taza de albahaca fresca', '2 cucharadas de piñones', '1/4 taza de queso parmesano', '1/4 taza de aceite de oliva', '1/2 taza de tomates cherry'],
      pasos: ['Cocinar pasta al dente', 'Preparar pesto licuando albahaca, piñones, queso y aceite', 'Mezclar pasta con pesto', 'Agregar tomates cherry cortados por mitad'],
      tiempoPreparacion: '20 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 400,
        proteinas: '12g',
        grasas: '22g',
        carbohidratos: '45g'
      },
      categoria: 'Cena'
    },
    {
      nombre: 'Tacos de Camarón',
      descripcion: 'Tacos de camarón con repollo morado y salsa de yogurt.',
      imagen: 'assets/img/tacos.jpg',
      ingredientes: ['200g de camarones', '4 tortillas de maíz', '1 taza de repollo morado rallado', '1/4 taza de yogurt griego', '1 cucharadita de chipotle', 'Jugo de 1 lima'],
      pasos: ['Sazonar y cocinar los camarones', 'Preparar salsa mezclando yogurt y chipotle', 'Calentar tortillas', 'Armar tacos con repollo, camarones y salsa'],
      tiempoPreparacion: '15 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 320,
        proteinas: '25g',
        grasas: '8g',
        carbohidratos: '35g'
      },
      categoria: 'Cena'
    },
    
    // Snacks
    {
      nombre: 'Yogurt con frutos secos',
      descripcion: 'Yogurt griego con frutos secos y miel.',
      imagen: 'assets/img/yogurt.jpeg',
      ingredientes: ['1 taza de yogurt griego', '2 cucharadas de nueces', '1 cucharada de miel', '1/4 taza de arándanos'],
      pasos: ['Servir yogurt en un bowl', 'Agregar nueces y arándanos', 'Rociar con miel'],
      tiempoPreparacion: '3 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 220,
        proteinas: '10g',
        grasas: '9g',
        carbohidratos: '25g'
      },
      categoria: 'Snack'
    },
    {
      nombre: 'Hummus con Vegetales',
      descripcion: 'Dip de garbanzos con bastones de zanahoria y apio.',
      imagen: 'assets/img/Hummus.jpg',
      ingredientes: ['1 taza de garbanzos cocidos', '2 cucharadas de tahini', 'Jugo de 1 limón', '1 diente de ajo', '1/2 taza de zanahoria en bastones', '1/2 taza de apio en bastones'],
      pasos: ['Procesar garbanzos con tahini, ajo y limón', 'Añadir agua hasta obtener consistencia deseada', 'Servir con vegetales frescos'],
      tiempoPreparacion: '10 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 150,
        proteinas: '6g',
        grasas: '7g',
        carbohidratos: '18g'
      },
      categoria: 'Snack'
    },
    {
      nombre: 'Energéticos de Avena',
      descripcion: 'Bolitas energéticas de avena, dátiles y coco.',
      imagen: 'assets/img/energeticos.jpg',
      ingredientes: ['1 taza de avena', '1/2 taza de dátiles sin hueso', '2 cucharadas de mantequilla de maní', '1/4 taza de coco rallado', '1 cucharadita de canela'],
      pasos: ['Procesar dátiles hasta formar pasta', 'Mezclar con avena, mantequilla y canela', 'Formar bolitas', 'Envolver en coco rallado', 'Refrigerar 1 hora'],
      tiempoPreparacion: '15 minutos',
      porciones: 12,
      informacionNutrimental: {
        calorias: 90,
        proteinas: '2g',
        grasas: '3g',
        carbohidratos: '15g'
      },
      categoria: 'Snack'
    },
    {
      nombre: 'Palomitas Caseras',
      descripcion: 'Palomitas de maíz hechas en casa con aceite de coco.',
      imagen: 'assets/img/palomas.jpg',
      ingredientes: ['1/4 taza de granos de maíz para palomitas', '1 cucharada de aceite de coco', 'Sal al gusto'],
      pasos: ['Calentar aceite en olla grande', 'Agregar granos de maíz y tapar', 'Mover ocasionalmente hasta que dejen de explotar', 'Salar al gusto'],
      tiempoPreparacion: '5 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 120,
        proteinas: '3g',
        grasas: '5g',
        carbohidratos: '18g'
      },
      categoria: 'Snack'
    },
    
    // Postres
    {
      nombre: 'Brownie de Chocolate',
      descripcion: 'Brownie saludable con cacao y nueces.',
      imagen: 'assets/img/brownie.jpg',
      ingredientes: ['1 taza de harina de almendras', '1/4 taza de cacao en polvo', '1/2 taza de dátiles', '1/4 taza de mantequilla de maní', '1 huevo', '1/2 taza de nueces picadas'],
      pasos: ['Mezclar todos los ingredientes', 'Verter en molde engrasado', 'Hornear a 180°C por 20 min', 'Dejar enfriar antes de cortar'],
      tiempoPreparacion: '30 minutos',
      porciones: 8,
      informacionNutrimental: {
        calorias: 200,
        proteinas: '5g',
        grasas: '12g',
        carbohidratos: '18g'
      },
      categoria: 'Postres'
    },
    {
      nombre: 'Fresas con Chocolate',
      descripcion: 'Fresas bañadas en chocolate oscuro.',
      imagen: 'assets/img/fresas.jpg',
      ingredientes: ['10 fresas grandes', '100g de chocolate oscuro', '1 cucharadita de aceite de coco'],
      pasos: ['Derretir chocolate con aceite de coco', 'Bañar las fresas', 'Refrigerar hasta que el chocolate endurezca'],
      tiempoPreparacion: '15 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: '180',
        proteinas: '3g',
        grasas: '10g',
        carbohidratos: '20g'
      },
      categoria: 'Postres'
    },
    {
      nombre: 'Mousse de Mango',
      descripcion: 'Postre cremoso y ligero de mango con yogurt.',
      imagen: 'assets/img/mouse.jpg',
      ingredientes: ['1 mango grande', '1/2 taza de yogurt griego', '1 cucharada de miel', '1/2 cucharadita de vainilla'],
      pasos: ['Licuar mango con yogurt', 'Agregar miel y vainilla', 'Refrigerar por 2 horas', 'Servir frío'],
      tiempoPreparacion: '10 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 150,
        proteinas: '4g',
        grasas: '2g',
        carbohidratos: '30g'
      },
      categoria: 'Postres'
    },
    {
      nombre: 'Galletas de Avena',
      descripcion: 'Galletas saludables de avena y pasas.',
      imagen: 'assets/img/galletas.jpeg',
      ingredientes: ['1 taza de avena', '1/2 taza de harina integral', '1/4 taza de miel', '1/4 taza de pasas', '1 huevo', '1 cucharadita de canela'],
      pasos: ['Mezclar ingredientes secos', 'Agregar huevo y miel', 'Formar galletas', 'Hornear a 180°C por 12-15 minutos'],
      tiempoPreparacion: '25 minutos',
      porciones: 12,
      informacionNutrimental: {
        calorias: 90,
        proteinas: '3g',
        grasas: '1g',
        carbohidratos: '18g'
      },
      categoria: 'Postres'
    }
  ];

  seleccionarReceta(receta: any) {
    this.recetaSeleccionada = receta;
  }

  cerrarDetalle(event: Event) {
    event.stopPropagation();
    this.recetaSeleccionada = null;
  }

  getRecetasPorCategoria(categoria: string) {
    return this.recetas.filter(r => r.categoria === categoria);
  }
}