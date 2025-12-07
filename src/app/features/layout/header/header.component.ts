import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DateComponent } from '../../../shared/components/date/date.component';
//import { HelpMenuComponent } from '../../../shared/components/help-menu/help-menu.component';
import { UserMenuComponent } from '../../../shared/components/user-menu/user-menu.component';
import { PrimeModule } from '../../../shared/modules/prime.module';
import { SourceDataService } from '../../../shared/services/source-data.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [PrimeModule, RouterLink, DateComponent, UserMenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderComponent implements OnInit {
  @Output() menu: EventEmitter<null> = new EventEmitter<null>();

  constructor(
    public sourceService: SourceDataService,
    public authService: AuthService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUser(this.authService.getUserId() || '').subscribe((user) => {
      this.userService.setUserToStorage(user);
    });
  }
}