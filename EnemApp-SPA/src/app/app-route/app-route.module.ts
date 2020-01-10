import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatoGetComponent } from '../candidato-get/candidato-get.component';
import { CandidatoCreateComponent } from '../candidato-create/candidato-create.component';
import { CandidatoUpdateComponent } from '../candidato-update/candidato-update.component';
import { CandidatoAprovadosComponent } from '../candidato-aprovados/candidato-aprovados.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'candidatos', loadChildren: '../../app/components/candidato-list/candidato-list.component.module#CandidatoListModule' },
  { path: 'get/:id', component: CandidatoGetComponent },
  { path: 'cadastrar', component: CandidatoCreateComponent},
  { path: 'put/:id', component: CandidatoUpdateComponent},
  { path: 'realizarConcurso', component: CandidatoAprovadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
