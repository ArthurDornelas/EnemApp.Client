import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'candidatos', loadChildren: '../components/candidato-list/candidato-list.component.module#CandidatoListModule' },
  { path: 'get/:id',  loadChildren: '../components/candidato-get/candidato-get.component.module#CandidatoGetModule'},
  { path: 'cadastrar', loadChildren: '../components/candidato-create/candidato-create.component.module#CandidatoCreateModule' },
  { path: 'put/:id', loadChildren: '../components/candidato-update/candidato-update.component.module#CandidatoUpdateModule' },
  { path: 'realizarConcurso',
    loadChildren: '../components/candidato-aprovados/candidato-aprovados.component.module#CandidatoAprovadosModule'},
  { path: 'cadastrarConcurso', loadChildren: '../components/concurso-create/concurso-create.component.module#ConcursoCreateModule'},
  { path: 'concursos', loadChildren: '../components/concurso-list/concurso-list.component.module#ConcursoListModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
