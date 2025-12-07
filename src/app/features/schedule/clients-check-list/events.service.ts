import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS, API_URL } from '../../../core/config/constants';
import { UserEvent } from '../../main/models/types';
import { HttpService } from '../../../shared/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  urlEvents = `${API_URL}${API_ENDPOINTS.events}`;

  constructor(private http: HttpService) {}

  createEvent(data: UserEvent): Observable<UserEvent> {
    return this.http.post(this.urlEvents, { ...data });
  }

  getEvents(): Observable<UserEvent[]> {
    return this.http.get(this.urlEvents);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(this.urlEvents, { params: { id } });
  }
}
