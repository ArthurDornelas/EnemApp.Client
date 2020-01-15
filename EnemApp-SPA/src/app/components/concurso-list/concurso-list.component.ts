import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ConcursoService } from 'src/app/_services/concurso.service';

@Component({
  selector: 'app-concurso-list',
  templateUrl: './concurso-list.component.html',
  styleUrls: ['./concurso-list.component.css']
})
export class ConcursoListComponent implements OnInit {
  concursos: any;
  
  constructor(
    private concursoService: ConcursoService,
    private router: Router) { }

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

}
