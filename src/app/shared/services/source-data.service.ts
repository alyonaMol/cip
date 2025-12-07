import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, finalize, Observable, of, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EventsService } from '../../features/schedule/clients-check-list/events.service';
import { VisitsService } from '../../features/schedule/clients-check-list/visits.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SourceDataService {
  readonly eventsSourceData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  readonly eventsSourceData$: Observable<any> = this.eventsSourceData.asObservable();
  private readonly loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly loading$: Observable<boolean> = this.loading.asObservable();

  constructor(
    private userService: UserService,
    private eventsService: EventsService,
    private visitsService: VisitsService,
  ) {
    this.userService.user$.subscribe((user) => {
      if (user) {
        this.loadData();
      }
    });
  }

  public loadData(): void {
    this.loading.next(true);

    combineLatest([
      this.eventsService.getEvents(),
      this.visitsService.getVisits(),
    ])
      .pipe(
        tap(([events, visits]) => {
          this.eventsSourceData.next(events);
          this.visitsService.visitsSourceData.next(visits);

        }),
        catchError(() => of()),
        finalize(() => this.loading.next(false))
      )
      .subscribe();
  }
}