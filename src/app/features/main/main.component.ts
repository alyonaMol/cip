import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: true,
  imports: [StatusBadgeComponent],
})
export class MainComponent {
  constructor(public userService: UserService) {}
}
