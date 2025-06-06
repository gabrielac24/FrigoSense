import { Component } from '@angular/core';

interface Receta {
  nombre: string;
  descripcion: string;
  ingredientes: string[];
  pasos: string[];
  tiempoPreparacion: string;
  porciones: number;
  informacionNutrimental: {
    calorias: number;
    proteinas: string;
    grasas: string;
    carbohidratos: string;
  };
  imagen: string;
  expandida: boolean;
}

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  recetas = [
    {
      nombre: 'Bowl de Quinoa y Vegetales',
      descripcion: 'Un platillo vegetariano lleno de fibra, proteínas y sabor.',
      ingredientes: [
        '1 taza de quinoa',
        '2 tazas de agua',
        '1/2 taza de garbanzos cocidos',
        '1/2 taza de brócoli al vapor',
        '1/4 de aguacate en cubos',
        '1 cucharada de jugo de limón',
        'Sal y pimienta al gusto'
      ],
      pasos: [
        'Lava bien la quinoa con agua fría para quitar el sabor amargo.',
        'Pon la quinoa con el agua en una olla y cocina a fuego medio hasta que se absorba el agua (aprox. 15 minutos).',
        'Mientras tanto, cocina al vapor el brócoli por 4-5 minutos hasta que esté tierno pero aún verde.',
        'En un bowl, mezcla la quinoa cocida con los garbanzos y el brócoli.',
        'Agrega el aguacate en cubos, el jugo de limón, sal y pimienta.',
        'Mezcla bien y sirve tibio o frío.'
      ],
      tiempoPreparacion: '25 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 380,
        proteinas: '14g',
        grasas: '12g',
        carbohidratos: '50g',
        fibra: '9g'
      },
      imagen: 'https://cdn.pixabay.com/photo/2016/06/10/15/32/quinoa-1443868_1280.jpg',
      expandida: false
    },
    {
      nombre: 'Ensalada Mediterránea',
      descripcion: 'Una ensalada fresca, llena de sabores mediterráneos y muy fácil de preparar.',
      ingredientes: [
        '1 tomate grande en cubos',
        '1/2 pepino en rodajas',
        '1/4 de cebolla morada',
        '10 aceitunas negras',
        '50g de queso feta en cubos',
        '1 cucharada de aceite de oliva',
        'Orégano seco al gusto'
      ],
      pasos: [
        'Lava y corta el tomate, pepino y cebolla.',
        'En un bowl grande, mezcla las verduras con las aceitunas y el queso feta.',
        'Agrega el aceite de oliva y espolvorea con orégano.',
        'Sirve fresca como entrada o plato ligero.'
      ],
      tiempoPreparacion: '10 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 240,
        proteinas: '7g',
        grasas: '18g',
        carbohidratos: '10g',
        fibra: '3g'
      },
      imagen: 'https://cdn.pixabay.com/photo/2017/03/17/10/39/tomatoes-2158770_1280.jpg',
      expandida: false
    },
    {
      nombre: 'Smoothie Verde Detox',
      descripcion: 'Bebida energizante, ideal para depurar el organismo por las mañanas.',
      ingredientes: [
        '1 taza de espinacas frescas',
        '1/2 plátano maduro',
        '1/2 manzana verde',
        '1 taza de agua de coco',
        'Jugo de medio limón'
      ],
      pasos: [
        'Lava bien las espinacas y corta la manzana en cubos.',
        'En una licuadora, añade todos los ingredientes.',
        'Licúa por 30 segundos hasta obtener una mezcla homogénea.',
        'Sirve frío inmediatamente.'
      ],
      tiempoPreparacion: '5 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 130,
        proteinas: '2g',
        grasas: '1g',
        carbohidratos: '30g',
        fibra: '4g'
      },
      imagen: 'https://cdn.pixabay.com/photo/2018/08/15/18/06/smoothies-3600581_1280.jpg',
      expandida: false
    },
    {
      nombre: 'Tostadas de Aguacate y Huevo',
      descripcion: 'Desayuno balanceado con grasas saludables y proteína.',
      ingredientes: [
        '2 rebanadas de pan integral',
        '1 aguacate maduro',
        '1 huevo cocido',
        'Sal y pimienta al gusto',
        'Pizca de pimentón (opcional)'
      ],
      pasos: [
        'Tosta las rebanadas de pan hasta que estén doradas.',
        'Machaca el aguacate con un tenedor y agrega sal y pimienta.',
        'Corta el huevo en rebanadas.',
        'Unta el aguacate sobre el pan, coloca las rebanadas de huevo encima.',
        'Decora con pimentón si lo deseas.'
      ],
      tiempoPreparacion: '10 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 300,
        proteinas: '10g',
        grasas: '20g',
        carbohidratos: '22g',
        fibra: '6g'
      },
      imagen: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/appetite-1238257_1280.jpg',
      expandida: false
    },
    {
      nombre: 'Sopa de Lentejas Casera',
      descripcion: 'Plato reconfortante, rico en fibra y proteína vegetal.',
      ingredientes: [
        '1 taza de lentejas',
        '1 zanahoria picada',
        '1/2 cebolla picada',
        '1 diente de ajo',
        '1 hoja de laurel',
        '1 litro de agua o caldo de verduras',
        'Sal al gusto'
      ],
      pasos: [
        'Lava las lentejas y déjalas en remojo por al menos 30 minutos.',
        'En una olla, sofríe cebolla, ajo y zanahoria.',
        'Agrega las lentejas escurridas, el laurel y el caldo.',
        'Cocina a fuego medio durante 30-40 minutos hasta que estén tiernas.',
        'Rectifica la sal antes de servir.'
      ],
      tiempoPreparacion: '45 minutos',
      porciones: 4,
      informacionNutrimental: {
        calorias: 320,
        proteinas: '16g',
        grasas: '4g',
        carbohidratos: '50g',
        fibra: '10g'
      },
      imagen: 'https://cdn.pixabay.com/photo/2019/09/09/18/36/lentil-soup-4462525_1280.jpg',
      expandida: false
    },
    {
      nombre: 'Ensalada de Garbanzos con Aguacate',
      descripcion: 'Platillo fresco, ideal para una comida ligera o cena.',
      ingredientes: [
        '1 taza de garbanzos cocidos',
        '1/2 aguacate en cubos',
        '1 tomate picado',
        'Jugo de 1 limón',
        'Cilantro fresco picado',
        'Sal y pimienta'
      ],
      pasos: [
        'En un tazón mezcla los garbanzos con el tomate y el aguacate.',
        'Agrega el jugo de limón, cilantro, sal y pimienta.',
        'Mezcla suavemente y sirve al instante.'
      ],
      tiempoPreparacion: '10 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 290,
        proteinas: '10g',
        grasas: '13g',
        carbohidratos: '30g',
        fibra: '8g'
      },
      imagen: 'https://cdn.pixabay.com/photo/2017/03/29/12/18/chickpea-2181025_1280.jpg',
      expandida: false
    },
    {
      nombre: 'Bowl de Avena con Frutas',
      descripcion: 'Desayuno dulce, lleno de energía y fibra natural.',
      ingredientes: [
        '1/2 taza de avena',
        '1 taza de leche vegetal (almendra, avena, etc.)',
        'Fruta al gusto (plátano, fresas, arándanos)',
        '1 cucharadita de semillas de chía',
        'Canela al gusto'
      ],
      pasos: [
        'Cocina la avena con la leche a fuego bajo hasta que espese.',
        'Vierte en un bowl y decora con la fruta fresca.',
        'Agrega semillas de chía y espolvorea con canela.',
        'Sirve tibio o frío.'
      ],
      tiempoPreparacion: '15 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 280,
        proteinas: '7g',
        grasas: '6g',
        carbohidratos: '40g',
        fibra: '6g'
      },
      imagen: 'https://cdn.pixabay.com/photo/2018/07/05/21/09/oatmeal-3511813_1280.jpg',
      expandida: false
    },
    {
      nombre: 'Wrap de Pollo con Espinaca',
      descripcion: 'Rico en proteínas y perfecto para llevar.',
      ingredientes: [
        '1 tortilla integral',
        '100g de pechuga de pollo cocida y desmenuzada',
        '1 taza de espinaca fresca',
        '1 cucharadita de mostaza Dijon',
        '1/4 de aguacate en láminas'
      ],
      pasos: [
        'Calienta la tortilla en un sartén.',
        'Coloca el pollo, espinaca y aguacate al centro.',
        'Agrega la mostaza y enrolla el wrap firmemente.',
        'Corta por la mitad y sirve.'
      ],
      tiempoPreparacion: '10 minutos',
      porciones: 1,
      informacionNutrimental: {
        calorias: 310,
        proteinas: '26g',
        grasas: '11g',
        carbohidratos: '28g',
        fibra: '5g'
      },
      imagen: 'https://cdn.pixabay.com/photo/2018/06/18/16/05/tortilla-3484873_1280.jpg',
      expandida: false
    },
    {
      nombre: 'Salmón al Horno con Espárragos',
      descripcion: 'Plato principal elegante y bajo en carbohidratos.',
      ingredientes: [
        '1 filete de salmón',
        '6 espárragos verdes',
        '1 cucharada de aceite de oliva',
        'Jugo de 1/2 limón',
        'Sal, pimienta y ajo en polvo'
      ],
      pasos: [
        'Precalienta el horno a 180°C.',
        'Coloca el salmón y los espárragos en una bandeja.',
        'Rocía con aceite de oliva y jugo de limón, y condimenta.',
        'Hornea por 20 minutos o hasta que el salmón esté cocido.',
        'Sirve caliente.'
      ],
      tiempoPreparacion: '25 minutos',
      porciones: 2,
      informacionNutrimental: {
        calorias: 390,
        proteinas: '32g',
        grasas: '24g',
        carbohidratos: '6g',
        fibra: '2g'
      },
      imagen: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/salmon-3008164_1280.jpg',
      expandida: false
    }
  ];

  toggleReceta(index: number): void {
    this.recetas[index].expandida = !this.recetas[index].expandida;
  }
}