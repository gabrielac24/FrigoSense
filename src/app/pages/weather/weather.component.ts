import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './Weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  searchHistory: string[] = [];
  predefinedCities = [
    { valor: 'Kiev', nombre: 'Kiev' },
    { valor: 'Progreso', nombre: 'Progreso' },
    { valor: 'los_angeles', nombre: 'Los Angeles' },
    { valor: 'tokyo', nombre: 'Tokyo' },
    { valor: 'madrid', nombre: 'Madrid' },
    { valor: 'durango', nombre: 'Durango' },
    { valor: 'guadalupe_victoria', nombre: 'Guadalupe Victoria' },
    { valor: 'mexico_city', nombre: 'Ciudad de México' },
    { valor: 'guadalajara', nombre: 'Guadalajara' },
    { valor: 'new_york', nombre: 'New York' },
    { valor: 'monterrey', nombre: 'Monterrey' },
    { valor: 'toronto', nombre: 'Toronto' },
    { valor: 'paris', nombre: 'Paris' },
    { valor: 'cancun', nombre: 'Cancún' },
    { valor: 'acapulco', nombre: 'Acapulco' },
    { valor: 'puebla', nombre: 'Puebla' },
    { valor: 'merida', nombre: 'Mérida' },
    { valor: 'berlin', nombre: 'Berlin' },
    { valor: 'queretaro', nombre: 'Querétaro' },
    { valor: 'tijuana', nombre: 'Tijuana' },
    { valor: 'leon', nombre: 'León' },
    { valor: 'saltillo', nombre: 'Saltillo' },
    { valor: 'oaxaca', nombre: 'Oaxaca' },
    { valor: 'hermosillo', nombre: 'Hermosillo' },
    { valor: 'toluca', nombre: 'Toluca' },
    { valor: 'london', nombre: 'London' },
    { valor: 'san_luis_potosi', nombre: 'San Luis Potosí' },
    { valor: 'morelia', nombre: 'Morelia' },
    { valor: 'colima', nombre: 'Colima' },
    { valor: 'chalco', nombre: 'Chalco' },
    { valor: 'hawai', nombre: 'Hawai' },
    { valor: 'queretaro', nombre: 'Queretaro' }
  ];
  city: string = '';
  weatherInfo: any;
  weatherIconClass: string = 'fas fa-cloud'; // Clásico ícono de nube gris
  apiKey: string = '181d8b5b038359916b74f8658e1623b0';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getWeather(): void {
    if (!this.city.trim()) {
      this.weatherInfo = { error: 'Ingrese una ciudad válida.' };
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric&lang=es`;
    this.http.get(url).subscribe(
      (data: any) => {
        if (data.cod === 200) {
          let description = data.weather[0].description.toLowerCase();

          // Reemplazar las descripciones de clima
          if (description.includes('Nubes')) {
            description = 'Nublado';
          } else if (description.includes('Cielo claro') || description.includes('Despejado')) {
            description = 'Despejado';
          }

          this.weatherInfo = {
            name: data.name,
            country: data.sys.country,
            temp: Math.round(data.main.temp),
            wind: data.wind.speed,
            description: description,
            humidity: data.main.humidity,  // Humedad en porcentaje (%)
            precip: data.rain ? data.rain["1h"] || 0 : 0,
            sunrise: this.convertTimestampToTime(data.sys.sunrise), // Salida del sol
          sunset: this.convertTimestampToTime(data.sys.sunset)   
          };

          // Cambiar el ícono dependiendo del clima
          this.setWeatherIcon(data.weather[0].main);

          if (!this.searchHistory.includes(this.city)) {
            this.searchHistory.push(this.city);
          }
        } else {
          this.weatherInfo = { error: 'Ciudad no encontrada o no existe.' };
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        this.weatherInfo = { error: 'Fallo al obtener el clima.' };
      }
    );
  }
  convertTimestampToTime(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Cambiar ícono dependiendo del clima
  setWeatherIcon(weatherCondition: string): void {
    if (weatherCondition === 'Clear') {
      this.weatherIconClass = 'fas fa-sun'; // Sol
    } else if (weatherCondition === 'Rain') {
      this.weatherIconClass = 'fas fa-cloud-rain'; // Lluvia
    } else if (weatherCondition === 'Clouds') {
      this.weatherIconClass = 'fas fa-cloud'; // Nublado
    } else {
      this.weatherIconClass = 'fas fa-cloud'; // Default (nube gris)
    }
  }
}
