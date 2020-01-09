import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../_services/candidato.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { isNullOrUndefined} from 'util';

@Component({
  selector: 'app-candidato-create',
  templateUrl: './candidato-create.component.html',
  styleUrls: ['./candidato-create.component.css']
})
export class CandidatoCreateComponent implements OnInit {
  candidato: any = {};

  constructor(
    private candidatoService: CandidatoService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  cadastrarCandidato() {
    if (!isNullOrUndefined(this.candidato.nota)) {
    this.candidatoService.cadastrarCandidato(this.candidato).subscribe(data => {
      this.toastr.success('Candidato cadastrado com sucesso!');
      console.log('registrado com sucesso!');
      console.log(data);
      this.router.navigate(['candidatos']);
    }, error => {
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
    } else {
      this.toastr.warning('A nota está inválida');
      this.candidato.nota = 0;
    }
  }

  cancel() {
    this.router.navigate(['candidatos']);
  }

}
