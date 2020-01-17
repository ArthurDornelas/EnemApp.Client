import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcursoUpdateComponent } from './concurso-update.component';

const routes: Routes = [
    { path: '', component: ConcursoUpdateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConcursoUpdateRoutingModule {}
  
