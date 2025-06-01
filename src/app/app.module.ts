import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './pages/weather/weather.component';
import { ComparaComponent } from './pages/compara/compara.component';
import { NutricionComponent } from './pages/nutricion/nutricion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ImcCalculatorComponent } from './pages/imc-calculator/imc-calculator.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { ConversorComponent } from './pages/conversor/conversor.component';
import { BlogMitosComponent } from './pages/blog-mitos/blog-mitos.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    AcercaComponent,
    WeatherComponent,
    ComparaComponent, 
    NutricionComponent,
    ImcCalculatorComponent,
    ConversorComponent,
    BlogMitosComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    RecetasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
