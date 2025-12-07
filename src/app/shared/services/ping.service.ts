import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PING_QUERY } from '../../core/graphql/ping.query';

@Injectable({ providedIn: 'root' })
export class PingService {
  constructor(private apollo: Apollo) {}

 
  ping$() {
    return this.apollo
      .query<{ ping?: string }>({
        query: PING_QUERY,
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      })
      .pipe(
        tap((res) => {
          if (!res.data) console.error('GraphQL returned no data', res);
        }),
        map((res) => res.data?.ping ?? null),
        catchError((err) => {
          console.error('GraphQL ping error', err);
          return of(null);
        })
      );
  }

  pingWatch$() {
    return this.apollo
      .watchQuery<{ ping?: string }>({
        query: PING_QUERY,
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      })
      .valueChanges.pipe(
        tap((res) => {
          if (!res.data) console.error('GraphQL returned no data (watchQuery)', res);
        }),
        map((res) => res.data?.ping ?? null),
        catchError((err) => {
          console.error('GraphQL ping watch error', err);
          return of(null);
        })
      );
  }
}
