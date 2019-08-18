import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeaderComponent } from './app/header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
