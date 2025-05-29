import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { ComparaComponent } from './pages/compara/compara.component';
import { NutricionComponent } from './pages/nutricion/nutricion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './auth.guard';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { ImcCalculatorComponent } from './pages/imc-calculator/imc-calculator.component';
import { ConversorComponent } from './pages/conversor/conversor.component';
import { BlogMitosComponent } from './pages/blog-mitos/blog-mitos.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'acerca', component: AcercaComponent },
  { path: 'acerca2', component: AcercaComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'nutricion', component: NutricionComponent},
  { path: 'recetas', component: RecetasComponent},
  { path: 'imc-calculator', component: ImcCalculatorComponent},
  { path: 'conversor', component: ConversorComponent},
  { path: 'blog-mitos', component: BlogMitosComponent},
  { path: 'compara', component: ComparaComponent},
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
