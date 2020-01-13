import { Component, OnInit, TemplateRef } from '@angular/core';
import { CandidatoService } from '../../_services/candidato.service';
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

  public listarCandidatos(): void {
    this.candidatoService.listarCandidatos().subscribe(response => {
      this.candidatos = response;
    }, error => {
      console.log(error);
    });
  }

  public getCandidato(id: any): void {
    this.router.navigate(['get/', id]);
  }

  public atualizarCandidato(id: any): void {
    this.router.navigate(['put/', id]);
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  public deletarCandidato(id: any): void {

      this.candidatoService.deletarCandidato(id).subscribe(data => {
      this.listarCandidatos();
      }, error => {
        console.log(error);
      });
      this.modalRef.hide();
  }

  public decline(): void {
    this.modalRef.hide();
  }

}
