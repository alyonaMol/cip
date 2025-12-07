import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_ENDPOINTS, API_URL } from '../../core/config/constants';
import { User } from '../../features/main/models/types';
import { logoutUser, setUser } from '../state/user';
import { HttpService } from './http.service';

const EMPTY_USER: User = { id: null, token: null } as any;

@Injectable({ providedIn: 'root' })
export class UserService {
  private userUrl = `${API_URL}${API_ENDPOINTS.user}`;

  private readonly user: BehaviorSubject<User> = new BehaviorSubject<User>(
    (JSON.parse(localStorage.getItem('user') || 'null') as User) || EMPTY_USER
  );
  readonly user$: Observable<User> = this.user.asObservable();

  constructor(private http: HttpService, private store: Store) {
    if (this.user.value) {
      this.store.dispatch(setUser(this.user.value));
    }
  }

  public getUserValue(): User {
    return this.user.value;
  }

  public setUserToStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.user.next(user);
    this.store.dispatch(setUser(user));
  }

  public removeUserFromStorage(): void {
    localStorage.removeItem('user');
    this.user.next(EMPTY_USER);
    this.store.dispatch(logoutUser());
  }

  update(user: User): Observable<User> {
    return this.http.put(this.userUrl, user);
  }

  register(user: User): Observable<User | null> {
    return this.http.post(this.userUrl, user);
  }

  delete(id: string): Observable<User[]> {
    return this.http.delete(this.userUrl, { params: { id } });
  }

  getUser(id: string): Observable<User> {
    return this.http.get(this.userUrl, {
      params: { id },
    });
  }
}
