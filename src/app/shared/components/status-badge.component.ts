import { Component, OnInit } from '@angular/core';
import { PingService } from '../services/ping.service';
import { HealthService } from '../services/health.service';
import { combineLatest, take } from 'rxjs';

@Component({
  selector: 'cip-status-badge',
  standalone: true,
  template: ` <span [title]="title" [class.ok]="ok" class="status-dot"></span> `,
  styles: [
    `
      .status-dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #aaa;
      }
      .status-dot.ok {
        background: #2ecc71;
      }
    `,
  ],
})
export class StatusBadgeComponent implements OnInit {
  ok = false;
  title = 'Backend: checking...';
  constructor(private ping: PingService, private health: HealthService) {}
  ngOnInit() {
    combineLatest([this.ping.ping$(), this.health.get$()])
      .pipe(take(1))
      .subscribe(([pong, h]) => {
        this.ok = pong === 'pong' && h?.status === 'ok';
        this.title = this.ok ? 'Backend: OK' : 'Backend: issue';
      });
  }
}