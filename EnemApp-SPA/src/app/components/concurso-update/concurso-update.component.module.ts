import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConcursoUpdateComponent } from './concurso-update.component';
import { ConcursoUpdateRoutingModule } from './concurso-update.component.routing';

@NgModule({
    imports: [
      CommonModule,
      ConcursoUpdateRoutingModule,
      FormsModule
    ],
    declarations: [
        ConcursoUpdateComponent
    ]
  })
  export class ConcursoUpdateModule { }
