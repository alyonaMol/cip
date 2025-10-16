import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthGuard } from './core/auth/auth.guard'; 
import { LoginComponent } from './core/auth/login/login.component';
import { MainComponent } from './features/main/main.component';
import { AuthService } from './core/auth/auth.service';


const publicOnlyGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return router.createUrlTree(['/main']); 
  }
  return true; 
};

export const routes: Routes = [
  
  { path: 'login', 
    component: LoginComponent,
  canActivate: [publicOnlyGuard] 

  },

  { 
    path: 'main', 
    component: MainComponent, 
    canActivate: [AuthGuard] 
  },
  
  
  { path: '', redirectTo: '/main', pathMatch: 'full' }, 
  

  { path: '**', redirectTo: '/main' } 
];