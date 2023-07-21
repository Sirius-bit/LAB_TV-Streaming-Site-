import { Component } from '@angular/core';
import { BuyedFilm } from 'src/app/interfaces/buyed-film';
import { BuyMediaService } from 'src/app/services/buy-film.service';
import { VariablesComponentService } from 'src/app/services/variables-component.service';

@Component({
  selector: 'app-reserved-area-film',
  templateUrl: './reserved-area-film.component.html',
  styleUrls: ['./reserved-area-film.component.scss']
})
export class ReservedAreaFilmComponent {

  constructor(protected buyedFilm: BuyMediaService, private variable: VariablesComponentService) {
    this.getBuyedMedia()
    variable.footer$.next(false)
  }

  deleteFilm: boolean = false
  buyedFilms: any[] = []
  noFilm: boolean = true

  getBuyedMedia = () => {
    this.buyedFilm.getMedia().subscribe({
      next: (films: any) => {
        console.log(films);
        this.noFilm = false
        this.buyedFilms = films
      },
      error: (err: any) => this.noFilm = true
    })
  }

  delete = () => {
    this.deleteFilm = !this.deleteFilm
  }

  deleteFilmFromArea = (film: any) => {
    console.log(this.buyedFilms.length);
    if (this.buyedFilms.length === 1) this.noFilm = true
    this.buyedFilm.deleteMedia(film.id)
    const index = this.buyedFilms.indexOf(film)
    this.buyedFilms.splice(index, 1)
  }
}
