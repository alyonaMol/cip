import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotificationService } from './notification.service';

type HttpMethod = 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE' | 'DEFAULT';

const HttpMethodMessages = {
  GET: { success: 'Data retrieved successfully.', error: 'Error retrieving data' },
  PUT: { success: 'Data updated successfully.', error: 'Error updating data' },
  POST: { success: 'Data created successfully.', error: 'Error creating data' },
  PATCH: { success: 'Data updated successfully.', error: 'Error updating data' },
  DELETE: { success: 'Data deleted successfully.', error: 'Error deleting data' },
  DEFAULT: { success: 'Operation successful.', error: 'Error occurred' },
};

interface HttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[] };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient, private notification: NotificationService) {}

  public get<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.http.get<T>(url, options).pipe(
      map((data) => this.pipeCallback('GET', data)),
      catchError((error) => this.errorHandler('GET', error))
    );
  }

  public post<T>(url: string, body: Record<string, any> = {}, options?: HttpOptions): Observable<T> {
    return this.http.post<T>(url, body, options).pipe(
      map((data) => this.pipeCallback('POST', data)),
      catchError((error) => this.errorHandler('POST', error))
    );
  }
  public publicPost<T>(url: string, body: Record<string, any> = {}, options?: HttpOptions): Observable<T> {
    return this.http.post<T>(url, body, options).pipe(
      map((data) => this.pipeCallback('POST', data)),
      catchError((error) => this.errorHandler('POST', error))
    );
  }

  public put<T>(url: string, body: Record<string, any> = {}, options?: HttpOptions): Observable<T> {
    return this.http.put<T>(url, body, options).pipe(
      map((data) => this.pipeCallback('PUT', data)),
      catchError((error) => this.errorHandler('PUT', error))
    );
  }

  public patch<T>(url: string, body: Record<string, any> = {}, options?: HttpOptions): Observable<T> {
    return this.http.patch<T>(url, body, options).pipe(
      map((data) => this.pipeCallback('PATCH', data)),
      catchError((error) => this.errorHandler('PATCH', error))
    );
  }
  public delete<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.http.delete<T>(url, options).pipe(
      map((data) => this.pipeCallback('DELETE', data)),
      catchError((error) => this.errorHandler('DELETE', error))
    );
  }

  private pipeCallback<T>(method: HttpMethod, data: T): T {
    if (data && method !== 'GET') {
      const successMessage = HttpMethodMessages[method]?.success || HttpMethodMessages.DEFAULT.success;
      this.notification.showSuccess(successMessage);
    }
    return data;
  }

  private errorHandler(method: HttpMethod, error: any): Observable<never> {
    console.warn('Http service: Error caught in http service');
    console.error('Error:', error);

    const errorMessage = HttpMethodMessages[method]?.error || HttpMethodMessages.DEFAULT.error;

    this.notification.throwError(errorMessage);

    return throwError(() => new Error(errorMessage));
  }

  sendMessage(url: string, data: any) {
    return this.http.post(url, data);
  }
}
