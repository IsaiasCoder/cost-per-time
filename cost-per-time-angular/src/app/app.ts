import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './features/home/welcome/welcome';
import { Navbar } from './features/navigation/navbar/navbar';
import { Footer } from './features/navigation/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cost-per-time-angular');
}
