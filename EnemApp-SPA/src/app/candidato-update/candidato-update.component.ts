import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../_services/candidato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-candidato-update',
  templateUrl: './candidato-update.component.html',
  styleUrls: ['./candidato-update.component.css']
})
export class CandidatoUpdateComponent implements OnInit {
  candidato: any = {};
  id: any;

  constructor(
    private candidatoService: CandidatoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.candidatoService.getCandidato(this.id).subscribe(data => {
      this.candidato = data;
    });
  }

  atualizarCandidato() {
    if (!isNullOrUndefined(this.candidato.nota)) {
      console.log(this.candidato.id);
      this.candidatoService.atualizarCandidato(this.candidato).subscribe(data => {
        this.toastr.success('Candidato atualizado com sucesso!');
        console.log('Atualizado com sucesso!');
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
