import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../_services/candidato.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidato-aprovados',
  templateUrl: './candidato-aprovados.component.html',
  styleUrls: ['./candidato-aprovados.component.css']
})
export class CandidatoAprovadosComponent implements OnInit {
  numVagas: any;

  constructor(
    private candidatoService: CandidatoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.realizarConcurso();
  }

  realizarConcurso() {
    this.candidatoService.realizarConcurso(this.numVagas).subscribe(data => {
      console.log(data);
      this.toList();
    }, error => {
      console.log(error);
    });
  }

  toList() {
    this.router.navigate(['candidatos']);
  }

}
