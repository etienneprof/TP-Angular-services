import { Component } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users : Array<string>;

  constructor(private msgService: MessageServiceService) {
    this.users = msgService.getAuteurs();
  }
}
