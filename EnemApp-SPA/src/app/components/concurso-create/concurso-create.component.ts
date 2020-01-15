import { Component, OnInit } from '@angular/core';
import { Concurso } from 'src/app/model/concurso.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConcursoService } from '../../_services/concurso.service'

@Component({
  selector: 'app-concurso-create',
  templateUrl: './concurso-create.component.html',
  styleUrls: ['./concurso-create.component.css']
})
export class ConcursoCreateComponent implements OnInit {
  concurso: Concurso = new Concurso();
  submitted: boolean = false;

  constructor(
    private concursoService: ConcursoService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.submitted = false;
  }

  public cadastrarConcurso(): void {
    this.concursoService.cadastrarConcurso(this.concurso).subscribe(data => {
      this.toastr.success('Concurso cadastrado com sucesso!');
      console.log('registrado com sucesso!');
      console.log(data);
      this.router.navigate(['candidatos']);
    }, error => {
      this.submitted = false;
      error.error.errors ?
        Object.values(error.error.errors).forEach(fieldErrors => {
          const errors = fieldErrors as Array<string>;
          // tslint:disable-next-line: no-shadowed-variable
          errors.forEach(error => {
            this.toastr.error(error);
          });
        }) :
        this.toastr.warning(error.error);
    });
  }

  public onSubmit(): void {
    this.cadastrarConcurso();
    this.submitted = true;
  }

  public cancel(): void {
    this.router.navigate(['candidatos']);
  }
}
