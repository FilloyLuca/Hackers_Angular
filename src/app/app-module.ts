import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { HackerForm } from './component/hacker-form/hacker-form';
import { HackerList } from './component/hacker-list/hacker-list';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    About,
    HackerForm,
    HackerList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
