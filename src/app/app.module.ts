import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SimilarFilmsComponent } from './components/similar-films/similar-films.component';
import { PopularFilmsComponent } from './components/popular-films/popular-films.component';
import { SearchedMovieComponent } from './components/searched-movie/searched-movie.component';
import { SearchedFilmsResultComponent } from './components/searched-films-result/searched-films-result.component';
import { UpComingComponent } from './components/up-coming/up-coming.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { ReservedAreaFilmComponent } from './components/reserved-area-film/reserved-area-film.component';
import { AuthInterceptor } from './interceptor/authentication';
import { EnterComponent } from './components/enter/enter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    DashboardComponent,
    CatalogComponent,
    FooterComponent,
    FilmDetailsComponent,
    PageNotFoundComponent,
    FilmsListComponent,
    UnauthorizedComponent,
    SearchBarComponent,
    SimilarFilmsComponent,
    PopularFilmsComponent,
    SearchedMovieComponent,
    SearchedFilmsResultComponent,
    UpComingComponent,
    TopRatedComponent,
    ReservedAreaFilmComponent,
    EnterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarouselModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
