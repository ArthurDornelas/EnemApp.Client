import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConcursoService } from 'src/app/_services/concurso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { isNullOrUndefined } from 'util';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-concurso-update',
  templateUrl: './concurso-update.component.html',
  styleUrls: ['./concurso-update.component.css']
})
export class ConcursoUpdateComponent implements OnInit {
  concurso: any = {};
  id: any;
  modalRef: BsModalRef;
  
  constructor(
    private concursoService: ConcursoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.concursoService.getConcurso(this.id).subscribe(data => {
      this.concurso = data;
    });
  }

  public atualizarConcurso(): void {
    if (!isNullOrUndefined(this.concurso.numeroVagas)) {
      console.log(this.concurso.id);
      this.concursoService.atualizarConcurso(this.concurso).subscribe(data => {
        this.toastr.success('Candidato atualizado com sucesso!');
        console.log('Atualizado com sucesso!');
        this.router.navigate(['concursos']);
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
      this.toastr.warning('O número de vagas está inválido');
      this.concurso.numeroVagas = 0;
    }
  }

  public cancel(): void {
    this.router.navigate(['concursos']);
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  public attConcurso(): void {
    this.atualizarConcurso();
    this.modalRef.hide();
  }

  public decline(): void {
    this.modalRef.hide();
  }

}
