import {
  HttpEvent,
  HttpHandlerFn, 
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken(); 

  // 1. Ігноруємо зовнішні API (наприклад, OpenAI)
  if (req.url.includes('api.openai.com')) {
    return next(req);
  }

  // 2. Додавання токена: Перевіряємо токен перед клонуванням запиту.
  if (token) { // ❗ ЦЯ ПЕРЕВІРКА УСУВАЄ ПОМИЛКУ string | null ❗
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`, 
      },
    });
  }

  // 3. Обробка відповідей
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Разлогинить і відправити на логін
        authService.logout();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};