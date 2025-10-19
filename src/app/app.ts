import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PingService } from './shared/services/ping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class App implements OnInit {
  constructor(private pingService: PingService) {}

  ngOnInit(): void {
    this.pingService.ping$().subscribe(console.log);
  }
}
