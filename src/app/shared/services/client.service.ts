import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { API_ENDPOINTS, API_URL } from '../../core/config/constants';
import { Client, ClientView } from '../../core/models/types';
//import { addNestedRelatives } from '../utils/helpers';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  readonly clientSourceData = new BehaviorSubject<ClientView[]>([]);
  readonly clientSourceData$: Observable<ClientView[]> = this.clientSourceData.asObservable();

  private readonly _loading = new BehaviorSubject<boolean>(false); // Prefix private variables with "_"
  readonly loading$: Observable<boolean> = this._loading.asObservable();

  private readonly _urlClientPublic = `${API_URL}${API_ENDPOINTS.public}`;
  private readonly _urlClients = `${API_URL}${API_ENDPOINTS.clients}`;

  constructor(private readonly http: HttpService) {}

  fetchClientsList(): void {
    this._loading.next(true);
    this.getClients().pipe(finalize(() => this._loading.next(false)));
    //.subscribe((clients) => this.clientSourceData.next(addNestedRelatives(clients)));
  }
  updateClientSource(data: ClientView[]): void {
    this.clientSourceData.next(data);
  }

  registerClient(data: Client[]): Observable<any> {
    return this.http.publicPost(this._urlClientPublic, data);
  }

  createClient(data: Client): Observable<any> {
    return this.http.post(this._urlClients, data);
  }

  updateClient(data: Client | ClientView): Observable<any> {
    return this.http.put(this._urlClients, data);
  }

  updateClientData(data: Partial<Client>): Observable<any> {
    return this.http.patch(this._urlClients, data); // Use `Partial` type to reflect partial updates
  }

  deleteClient(id: string): Observable<any> {
    return this.http.delete(this._urlClients, { params: { id } });
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this._urlClients);
  }
}
