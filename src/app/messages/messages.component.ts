import { Component } from '@angular/core';
import { Message } from 'src/bo/Message';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages: Message[];

  constructor(private msgService: MessageServiceService) {
    this.messages = msgService.getMessage();
  }
}
