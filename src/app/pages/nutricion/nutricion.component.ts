import { Component } from '@angular/core';
import { NutricionService } from '../../services/nutricion.service';
import { NutritionItem } from '../../interfaces/nutricion';

@Component({
  selector: 'app-nutricion',
  templateUrl: './nutricion.component.html',
  styleUrls: ['./nutricion.component.css']
})
export class NutricionComponent {
  datosNutricionales: any[] = [];
  errorMensaje: string = '';
  imagenes: { [key: string]: string } = {};

  constructor(private nutricionService: NutricionService) {}

  buscarNutricion(ingredientes: string) {
    this.errorMensaje = '';
    this.datosNutricionales = [];
    this.imagenes = {};

    if (!ingredientes.trim()) {
      this.errorMensaje = 'Por favor, ingresa un alimento o platillo.';
      return;
    }

    this.nutricionService.obtenerInformacionNutricional(ingredientes).subscribe(
      (data: NutritionItem[]) => {
        if (data.length === 0) {

          this.errorMensaje = 'No se encontró información para la consulta.';
        } else {
          this.datosNutricionales = data;

          data.forEach((item: any) => {
            this.nutricionService.buscarImagen(item.name).subscribe(imgData => {
              if (imgData.results && imgData.results.length > 0) {
                this.imagenes[item.name] = imgData.results[0].urls.regular;
              } else {
                this.imagenes[item.name] = 'https://via.placeholder.com/100'; // Imagen por defecto
              }
            });
          });
        }
      },
      error => {
        this.errorMensaje = 'Error al obtener datos. Verifica tu API Key.';
        console.error('Error:', error);
      }
    );
  }
}
