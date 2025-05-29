import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  standalone: false,
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css'
})
export class ConversorComponent {
  valor: number = 0;
  unidadOrigen: string = 'tsp';
  unidadDestino: string = 'ml';
  resultado: number | null = null;

  conversiones: { [key: string]: { [key: string]: number } } = {
    tsp: { ml: 4.93, tbsp: 0.333, cup: 0.0208 },
    tbsp: { ml: 14.79, tsp: 3, cup: 0.0625 },
    cup: { ml: 240, tbsp: 16, tsp: 48 },
    ml: { tsp: 0.2029, tbsp: 0.0676, cup: 0.0042, l: 0.001 },
    l: { ml: 1000 },
    g: { oz: 0.0353 },
    oz: { g: 28.35 }
  };

  convertir() {
    const conv = this.conversiones[this.unidadOrigen];
    if (conv && conv[this.unidadDestino]) {
      this.resultado = this.valor * conv[this.unidadDestino];
    } else if (this.unidadOrigen === this.unidadDestino) {
      this.resultado = this.valor;
    } else {
      this.resultado = null;
      alert('Conversión no disponible.');
    }
  }
}
