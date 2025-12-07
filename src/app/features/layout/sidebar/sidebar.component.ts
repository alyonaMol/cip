import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Card } from 'primeng/card';
import { Menu } from 'primeng/menu';
import { ClientService } from '../../../shared/services/client.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, Menu, AsyncPipe, Card],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] | undefined;
  nonApprovedUsersCount = '';

  isScheduleDisabled: boolean = true;

  constructor(public clientService: ClientService) {}

  ngOnInit() {
    this.clientService.clientSourceData$.subscribe((clients) => {
      this.nonApprovedUsersCount = String(clients.filter((client) => !client.isApproved).length);
      this.items = [
        {
          items: [
            {
              label: 'Home', 
              icon: 'pi pi-home', 
              routerLink: ['/'],
            },
            {
              label: 'Registration',
              icon: 'pi pi-user-plus',
              routerLink: ['/register'],
            },
            {
              label: 'Clients',
              icon: 'pi pi-users',
              routerLink: ['/client-list'],
              badge: this.nonApprovedUsersCount,
              badgeStyleClass: 'p-tag p-tag-warning',
            },
            {
              label: 'Schedule',
              icon: 'pi pi-calendar-times',
              routerLink: ['/schedule'],
              //disabled: this.isScheduleDisabled,
            },
            {
              label: 'Payments',
              icon: 'pi pi-wallet',
              routerLink: ['/payments'],
            },
            {
              label: 'Memberships',
              icon: 'pi pi-id-card',
              routerLink: ['/memberships'],
            },
            {
              label: 'Products',
              icon: 'pi pi-shopping-cart',
              routerLink: ['/products'],
            },
            {
              label: 'Reports',
              icon: 'pi pi-chart-bar',
              routerLink: ['/analytics'],
            },
            {
              label: 'Emails',
              icon: 'pi pi-send',
              routerLink: ['/emails'],
            },
          ],
        },
      ];
    });
  }
}
