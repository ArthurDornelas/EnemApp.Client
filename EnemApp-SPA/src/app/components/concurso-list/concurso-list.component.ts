import { Component, OnInit, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { ConcursoService } from 'src/app/_services/concurso.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-concurso-list',
  templateUrl: './concurso-list.component.html',
  styleUrls: ['./concurso-list.component.css']
})
export class ConcursoListComponent implements OnInit {
  concursos: any;
  modalRef: BsModalRef;
  
  constructor(
    private concursoService: ConcursoService,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.listarConcursos();
  }

  public listarConcursos(): void {
    this.concursoService.listarConcursos().subscribe(response => {
      this.concursos = response;
    }, error => {
      console.log(error);
    });
  }

  public getConcurso(id: any): void {
    this.router.navigate(['getConcurso/', id]);
  }

  public atualizarConcurso(id: any): void {
    this.router.navigate(['putConcurso/', id]);
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  public deletarConcurso(id: any): void {

      this.concursoService.deletarConcurso(id).subscribe(data => {
      this.listarConcursos();
      }, error => {
        console.log(error);
      });
      this.modalRef.hide();
  }

  public decline(): void {
    this.modalRef.hide();
  }


}
