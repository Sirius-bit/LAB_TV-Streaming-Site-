import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Result } from '../interfaces/films';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  filmToShow$ = new BehaviorSubject<Result | undefined>(undefined)
  imageLink: string = 'https://image.tmdb.org/t/p/original'
  films?: Result[]
  popularFilm?: any
  searchedFilms: any


  getMovies = (): Observable<any> => {
    return this.http.get(`${environment.basicUrl}popular?api_key=${environment.apiKey}&language=enUS&page
    =1`)
  }

  getImageMovies = (img?: any): Observable<any> => {
    return this.http.get(`${this.imageLink}${img}`)
  }

  getPopular = (): Observable<any> => {
    return this.http.get(`${environment.basicUrl}popular?api_key=${environment.apiKey}`)
  }

  getMoreFilms = (page: number): Observable<any> => {
    return this.http.get(`${environment.basicUrl}popular?api_key=${environment.apiKey}&page=${page}`)
  }

  getVideos = (id: number): Observable<any> => {
    return this.http.get(`${environment.basicUrl}${id}/videos?api_key=${environment.apiKey}&language=en-US `)
  }

  getDetails = (id: number): Observable<any> => {
    return this.http.get(`${environment.basicUrl}${id}?api_key=${environment.apiKey}&language=en-US`)
  }

  getCredits = (id: number): Observable<any> => {
    return this.http.get(`${environment.basicUrl}${id}?api_key=${environment.apiKey}&append_to_response=credits`)
  }

  getSimilarFilms = (id: number): Observable<any> => {
    return this.http.get(`${environment.basicUrl}${id}/similar?api_key=${environment.apiKey}&language=en-US`)
    //  
  }

  getMovieSearched = (query?: string) => {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&query=${query}`)
  }

  sanitizeUrl = (key: string) => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`);
  }
}