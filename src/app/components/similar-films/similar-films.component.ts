import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/interfaces/films';
import { SimilarFilms } from 'src/app/interfaces/similar-films';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-similar-films',
  templateUrl: './similar-films.component.html',
  styleUrls: ['./similar-films.component.scss']
})
export class SimilarFilmsComponent {
  constructor(
    protected films: FilmsService,
    private route: Router
  ) { }


  @Input() similarFilms: SimilarFilms[] = []
  @Output() details = new EventEmitter<Result>

  detailsSimilarFilm = (similarFilm: any) => {
    this.details.emit(similarFilm)
    // console.log(similarFilm);
  }
}
