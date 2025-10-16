import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../../shared/services/client.service';
//import { SourceDataService } from '../../shared/services/source-data.service';
//import { ClientTableComponent } from './client-table/client-table.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
})
export class ClientListComponent implements OnInit {
  @Input() fields: string[] = [];

  constructor(
    public readonly clientService: ClientService,
    //public readonly sourceDataService: SourceDataService
  ) {}

  ngOnInit() {
    this._fetchClients();
  }

  private _fetchClients(): void {
    this.clientService.fetchClientsList();
  }
}