import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export const API_URL = 'https://cip-api-production.up.railway.app';

export const API_ENDPOINTS = {
  main: '/',
  user: '/v1/user',
  login: '/v1/auth/login',
};

export interface UserData {
  id: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userData = 'system_data';
  private apiUrl = `${API_URL}${API_ENDPOINTS.login}`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<UserData> {
    const params = new HttpParams().set('login', username).set('pass', password);

    return this.http
      .get<UserData>(this.apiUrl, { params })
      .pipe(tap((response) => this.storeToken(response)));
  }

  logout(): void {
    localStorage.removeItem(this.userData);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    const data = localStorage.getItem(this.userData);
    return data ? JSON.parse(data)?.token : null;
  }

  getUserId(): string | null {
    const data = localStorage.getItem(this.userData);
    return data ? JSON.parse(data)?.id : null;
  }

  private storeToken(user: UserData): void {
    localStorage.setItem(this.userData, JSON.stringify(user));
  }
}
