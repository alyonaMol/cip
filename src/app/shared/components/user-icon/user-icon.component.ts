import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../../../core/models/types';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss'],
  standalone: true,
  imports: [UpperCasePipe, NgIf],
})
export class UserIconComponent {
  @Input() userData: User | undefined | null;
  public hideImage = false;

  get initials(): string {
    if (this.userData?.name?.[0] && this.userData?.surname?.[0]) {
      return (this.userData.name[0] + this.userData.surname[0]).toUpperCase();
    }
    return '';
  }
}
