import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { authInterceptor } from './core/auth';
import { MessageService } from 'primeng/api';
import { provideState, provideStore } from '@ngrx/store';
import { reducer as userReducer } from './shared/state/user/user.reducer';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideApollo } from 'apollo-angular';
import { createHttpLink, InMemoryCache } from '@apollo/client/core';
import { GRAPHQL_URL } from './core/config/constants';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(),
    provideState({ name: 'user', reducer: userReducer }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
    provideApollo(() => {
      const link = createHttpLink({ uri: GRAPHQL_URL });
      return {
        link,
        cache: new InMemoryCache(),
      };
    }),
    MessageService,
  ],
};
