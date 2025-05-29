import { Component } from '@angular/core';

@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.component.html',
  styleUrls: ['./imc-calculator.component.css']
})
export class ImcCalculatorComponent {
  peso: number = 0;
  altura: number = 0;
  imc: number | null = null;
  clasificacion: string = '';
  mostrarResultado: boolean = false;
  unidadAltura: string = 'cm';
  edad: number = 18;
  sexo: string = 'hombre';

  calcularIMC() {
    if (this.peso > 0 && this.altura > 0) {
      const alturaEnMetros = this.unidadAltura === 'cm' ? this.altura / 100 : this.altura;
      this.imc = this.peso / (alturaEnMetros * alturaEnMetros);
      this.determinarClasificacion();
      this.mostrarResultado = true;
    }
  }

  private determinarClasificacion() {
    if (!this.imc) return;

    if (this.imc < 18.49) {
      this.clasificacion = 'Bajo peso';
    } else if (this.imc < 24.99) {
      this.clasificacion = 'Peso normal';
    } else if (this.imc < 29.99) {
      this.clasificacion = 'Sobrepeso';
    } else if (this.imc < 34.99) {
      this.clasificacion = 'Obesidad grado I';
    } else if (this.imc < 39.99) {
      this.clasificacion = 'Obesidad grado II';
    } else {
      this.clasificacion = 'Obesidad grado III (mórbida)';
    }
  }

  getRecomendacion() {
    if (!this.imc) return '';
    
    if (this.imc < 18.5) {
      return 'Consulta a un nutricionista para una dieta adecuada';
    } else if (this.imc < 25) {
      return 'Mantén tus hábitos saludables';
    } else {
      return 'Ejercicio regular y dieta balanceada';
    }
  }

  resetear() {
    this.peso = 0;
    this.altura = 0;
    this.imc = null;
    this.clasificacion = '';
    this.mostrarResultado = false;
  }
}