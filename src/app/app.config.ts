import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { authInterceptor } from './core/auth/auth.interceptor'; 
import { MessageService } from 'primeng/api'; 
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideState } from '@ngrx/store';
import { reducer as userReducer } from './shared/state/user/user.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes),
  MessageService,
  provideAnimations(),
  provideStore(),
  provideState({ name: 'user', reducer: userReducer }),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
      ])
    ),
  ],
};
