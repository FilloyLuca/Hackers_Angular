import { Component, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';


const routes: Routes = [
  { path: '', component: Home },
  { path: '', component: About}
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
