import { Component, OnInit, TemplateRef } from '@angular/core';
import { CandidatoService } from '../_services/candidato.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.component.html',
  styleUrls: ['./candidato-list.component.scss']
})
export class CandidatoListComponent implements OnInit {
  candidatos: any;
  modalRef: BsModalRef;

  constructor(
    private candidatoService: CandidatoService,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.listarCandidatos();
  }

  listarCandidatos() {
    this.candidatoService.listarCandidatos().subscribe(response => {
      this.candidatos = response;
    }, error => {
      console.log(error);
    });
  }

  getCandidato(id: any) {
    this.router.navigate(['get/', id]);
  }

  atualizarCandidato(id: any) {
    this.router.navigate(['put/', id]);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  deletarCandidato(id: any) {

      this.candidatoService.deletarCandidato(id).subscribe(data => {
      this.listarCandidatos();
      }, error => {
        console.log(error);
      });
      this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

}
