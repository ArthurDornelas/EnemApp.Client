import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcursoListComponent } from './concurso-list.component';

const routes: Routes = [
  { path: '', component: ConcursoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcursoListRoutingModule { }
