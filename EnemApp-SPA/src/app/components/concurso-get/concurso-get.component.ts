import { Component, OnInit } from '@angular/core';
import { Concurso } from 'src/app/model/concurso.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcursoService } from 'src/app/_services/concurso.service';

@Component({
  selector: 'app-concurso-get',
  templateUrl: './concurso-get.component.html',
  styleUrls: ['./concurso-get.component.css']
})
export class ConcursoGetComponent implements OnInit {
  id: any
  concurso: any

  constructor(
    private route: ActivatedRoute,
    private concursoService: ConcursoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.concursoService.getConcurso(this.id).subscribe(response => {
      this.concurso = response;
    }, error => {
      console.log(error);
    });
  }

  public toList(): void {
    this.router.navigate(['concursos']);
  }
}
