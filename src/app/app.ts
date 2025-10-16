import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [
    RouterModule // ✅ додаємо RouterModule для router-outlet
  ]
})
export class App {
  title = signal('cip');
}
