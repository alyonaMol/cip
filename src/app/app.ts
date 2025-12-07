import { NgClass, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PingService } from './shared/services/ping.service';
import { HeaderComponent } from './features/layout/header/header.component';
import { AuthService } from './core/auth/auth.service';
import { SidebarComponent } from './features/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [NgClass, NgIf, RouterOutlet, SidebarComponent, HeaderComponent],
})
export class App  {
  public isSidebarOpen = false;
  constructor(public authService: AuthService) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
