import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatoAprovadosComponent } from './candidato-aprovados.component';

const routes: Routes = [
    { path: '', component: CandidatoAprovadosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CandidatoAprovadosRoutingModule { }
