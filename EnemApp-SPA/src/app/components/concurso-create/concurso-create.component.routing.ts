import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcursoCreateComponent } from './concurso-create.component';

const routes: Routes = [
    { path: '', component: ConcursoCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConcursoCreateRoutingModule {}
