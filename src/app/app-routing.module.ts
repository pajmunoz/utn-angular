import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './Pages/login/login.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"signin", component:RegistroComponent, canActivate:[AuthGuard]},
  {path:"login", component:LoginComponent, canActivate:[AuthGuard]},
  {path:"producto/:id", component:DetalleComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
