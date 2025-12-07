import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { User } from '../../../core/models/types';
import { AuthService } from '../../../core/auth/auth.service';
import { PrimeModule } from '../../modules/prime.module';
import { UserService } from '../../services/user.service';
import { UserIconComponent } from '../user-icon/user-icon.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PrimeModule, UserIconComponent],
  standalone: true,
})
export class UserMenuComponent implements OnChanges {
  @Input() user: User | undefined | null;
  menuItems: MenuItem[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnChanges() {
    this.menuItems = [
      {
        label:
          `    <div class="user-info" (click)="$event.stopPropagation()">\n` +
          `      <app-user-icon class="user-info-img" [userData]="user"></app-user-icon>\n` +
          `      <div class="user-info-text">\n` +
          `        <div class="user-info-name">\n` +
          this.user?.name +
          ` ` +
          this.user?.surname +
          `        </div>\n` +
          `        <div class="user-info-email">` +
          this.user?.email +
          `</div>\n` +
          `      </div>\n` +
          `    </div>`,
        escape: false,
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: 'user-profile',
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: 'user-settings',
      },
      {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        command: () => this.logout(),
      },
    ];
  }

  public logout(): void {
    this.authService.logout();
    this.userService.removeUserFromStorage();
    this.router.navigate(['/login']);
  }
}
