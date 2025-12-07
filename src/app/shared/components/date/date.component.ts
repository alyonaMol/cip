import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { Popover } from 'primeng/popover';
import { interval } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs/operators';
import { PrimeModule } from '../../modules/prime.module';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, DatePipe, PrimeModule, Popover, DatePicker],
})
export class DateComponent {
  public date$: Observable<Date> = interval(1000).pipe(
    startWith(0),
    map(() => new Date())
  );
}
