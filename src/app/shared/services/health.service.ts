import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API_ENDPOINTS, API_URL } from '../../core/config/constants';

@Injectable({ providedIn: 'root' })
export class HealthService {
  constructor(private http: HttpService) {}
  get$() {
    return this.http.get<{ status: string }>(`${API_URL}${API_ENDPOINTS.health}`);
  }
}
