import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcursoGetComponent } from './concurso-get.component';

const routes: Routes = [
    { path: '', component: ConcursoGetComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConcursoGetRoutingModule {}