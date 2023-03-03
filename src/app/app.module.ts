import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConciertoComponent } from './concierto/concierto.component';
import { HomeComponent } from './home/home.component';
import { ConciertosComponent } from './conciertos/conciertos.component';
import { DeportesComponent } from './deportes/deportes.component';
import { RecorridosComponent } from './recorridos/recorridos.component';
import { ArtistComponent } from './artist/artist.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { TrendComponent } from './trend/trend.component';

@NgModule({
  declarations: [
    AppComponent,
    ConciertoComponent,
    HomeComponent,
    ConciertosComponent,
    DeportesComponent,
    RecorridosComponent,
    ArtistComponent,
    AsideComponent,
    FooterComponent,
    NewsComponent,
    VideosComponent,
    Article1Component,
    Article2Component,
    TrendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
