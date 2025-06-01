import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Receta {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  ingredientes: string[];
  instrucciones: string[];
  tiempoPreparacion: string;
  porciones: number;
  informacionNutricional: {
    calorias: number;
    proteinas: string;
    carbohidratos: string;
    grasas: string;
    fibra?: string;
  };
  expandida: boolean;
}

@Component({
  selector: 'app-recetas',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  recetas: Receta[] = [
    {
      id: 1,
      nombre: "Ensalada César",
      imagen: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
      descripcion: "Clásica ensalada César con aderezo cremoso y crotones crujientes.",
      ingredientes: [
        "1 lechuga romana",
        "1/2 taza de queso parmesano rallado",
        "1 taza de crotones",
        "1/2 taza de aderezo César",
        "1 pechuga de pollo asada (opcional)"
      ],
      instrucciones: [
        "Lavar y cortar la lechuga en trozos.",
        "Mezclar la lechuga con el aderezo.",
        "Agregar los crotones y el queso parmesano.",
        "Servir inmediatamente."
      ],
      tiempoPreparacion: "15 minutos",
      porciones: 4,
      informacionNutricional: {
        calorias: 320,
        proteinas: "12g",
        carbohidratos: "15g",
        grasas: "24g",
        fibra: "3g"
      },
      expandida: false
    },
    // Agrega más recetas aquí (mínimo 10)
    {
      id: 2,
      nombre: "Pasta Alfredo",
      imagen: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
      descripcion: "Pasta con salsa Alfredo cremosa y queso parmesano.",
      ingredientes: [
        "400g de fettuccine",
        "1 taza de crema para batir",
        "1/2 taza de mantequilla sin sal",
        "1 taza de queso parmesano rallado",
        "Sal y pimienta al gusto"
      ],
      instrucciones: [
        "Cocinar la pasta según las instrucciones del paquete.",
        "En una sartén, derretir la mantequilla y agregar la crema.",
        "Agregar el queso parmesano y mezclar hasta que se derrita.",
        "Mezclar la salsa con la pasta cocida.",
        "Servir caliente con pimienta negra molida."
      ],
      tiempoPreparacion: "25 minutos",
      porciones: 4,
      informacionNutricional: {
        calorias: 650,
        proteinas: "18g",
        carbohidratos: "45g",
        grasas: "42g"
      },
      expandida: false
    },
    // Continúa con las demás recetas...
  ];

  toggleExpandir(receta: Receta): void {
    receta.expandida = !receta.expandida;
  }
}