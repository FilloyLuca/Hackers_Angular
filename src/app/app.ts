import { Component, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './component/home/home';

const routes: Routes = [
  { path: '', component: Home }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hackers-app');
}
