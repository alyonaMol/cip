import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { authInterceptor } from './core/auth/auth.interceptor';
import { MessageService } from 'primeng/api';
import { provideState, provideStore } from '@ngrx/store';
import { reducer as userReducer } from './shared/state/user/user.reducer';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    MessageService,
    provideStore(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
    provideState({ name: 'user', reducer: userReducer }),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
