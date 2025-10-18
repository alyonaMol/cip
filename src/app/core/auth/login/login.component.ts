import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrimeModule } from '../../../shared/modules/prime.module';
import { NotificationService } from '../../../shared/services/notification.service';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../auth.service';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [PrimeModule, CommonModule, ReactiveFormsModule, NgIf, AsyncPipe],
  standalone: true,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  returnUrl: string = '/';
  error: string | null = null;

  private readonly loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly loading$: Observable<boolean> = this.loading.asObservable();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notification: NotificationService,
    public userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // Convenience getter for easy access to form fields
  get f(): any {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.notification.showWarning('Please fill in all required fields.');
      return;
    }

    this.loading.next(true);

    this.authService.login(this.f.username.value, this.f.password.value).subscribe(
      (userData) => {
        this.router.navigate([this.returnUrl]);
        this.loading.next(false);
      },
      (err) => {
        if (err.status === 401) {
          this.error = 'Invalid credentials';
        } else {
          this.error = 'Login failed. Please try again.';
        }
        this.notification.throwError(err);
        this.loading.next(false);
      }
    );
  }
}
