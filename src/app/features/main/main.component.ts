import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service'; 
import { ClientListComponent } from '../client-list/client-list.component';
import { NgIf, AsyncPipe } from '@angular/common'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css', 
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    
    ClientListComponent 
  ]
})
export class MainComponent {
 
  constructor(public userService: UserService) {}
}
