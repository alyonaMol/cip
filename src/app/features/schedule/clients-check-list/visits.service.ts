import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_ENDPOINTS, API_URL } from '../../../core/config/constants';
import { Visit } from '../../main/models/types';
import { HttpService } from '../../../shared/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class VisitsService {
  urlVisits = `${API_URL}${API_ENDPOINTS.visits}`;
  readonly visitsSourceData: BehaviorSubject<Visit[]> = new BehaviorSubject<Visit[]>([]);
  readonly visitsSourceData$: Observable<Visit[]> = this.visitsSourceData.asObservable();

  readonly loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly loading$: Observable<boolean> = this.loading.asObservable();

  constructor(private http: HttpService) {}

  createVisit(data: Visit): Observable<Visit> {
    return this.http.post(this.urlVisits, { ...data });
  }

  getVisits(): Observable<Visit[]> {
    return this.http.get(this.urlVisits);
  }

  deleteVisit(id: string): Observable<any> {
    return this.http.delete(this.urlVisits, { params: { id } });
  }
}
