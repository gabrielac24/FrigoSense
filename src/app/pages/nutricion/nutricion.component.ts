import { Component } from '@angular/core';
import { NutricionService } from '../../services/nutricion.service'; 

@Component({
  selector: 'app-nutricion',
  templateUrl: './nutricion.component.html',
  styleUrls: ['./nutricion.component.css'] // Corregido el nombre de la propiedad
})
export class NutricionComponent {
  datosNutricionales: any[] = []; // Guarda la respuesta de la API
  errorMensaje: string = ''; // Para manejar errores

  constructor(private nutricionService: NutricionService) {}

  buscarNutricion(ingredientes: string) {
    this.errorMensaje = ''; // Limpiar mensajes previos
    this.datosNutricionales = []; // Limpiar resultados anteriores

    if (!ingredientes.trim()) {
      this.errorMensaje = 'Por favor, ingresa un alimento o platillo.';
      return;
    }

    this.nutricionService.obtenerInformacionNutricional(ingredientes)
      .subscribe(
        data => {
          if (data.length === 0) {
            this.errorMensaje = 'No se encontró información para la consulta.';
          } else {
            this.datosNutricionales = data;
          }
        },
        error => {
          this.errorMensaje = 'Error al obtener datos. Verifica tu API Key.';
          console.error('Error:', error);
        }
      );
  }
}
