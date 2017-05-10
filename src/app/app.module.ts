import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { GalleryModule } from './gallery/gallery.module';
import { PortfolioModule } from './portfolio/portfolio.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';
import { AppSerice } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    HeaderModule,
    FooterModule,
    HomeModule,
    AboutModule,
    GalleryModule,
    PortfolioModule,
    AppRoutingModule
  ],
  providers: [
      AppSerice,
      Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
