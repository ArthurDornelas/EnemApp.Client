import { Component, OnInit, TemplateRef } from '@angular/core';
import { CandidatoService } from '../../_services/candidato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CandidatoListModule } from '../candidato-list/candidato-list.component.module';

@Component({
  selector: 'app-candidato-update',
  templateUrl: './candidato-update.component.html',
  styleUrls: ['./candidato-update.component.css']
})
export class CandidatoUpdateComponent implements OnInit {
  candidato: any = {};
  id: any;
  modalRef: BsModalRef;

  constructor(
    private candidatoService: CandidatoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.candidatoService.getCandidato(this.id).subscribe(data => {
      this.candidato = data;
    });
  }

  public atualizarCandidato(): void {
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

  public cancel(): void {
    this.router.navigate(['candidatos']);
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  public attCandidato(): void {
    this.atualizarCandidato();
    this.modalRef.hide();
  }

  public decline(): void {
    this.modalRef.hide();
  }

}
