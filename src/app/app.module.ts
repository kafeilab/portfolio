import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';

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
    HomeModule,
    AboutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
