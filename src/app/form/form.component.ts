import { Component } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  auteur: string;
  contenu: string;

  constructor(private msgService: MessageServiceService) {
    this.auteur = '';
    this.contenu = '';
  }

  onSubmit() {
    this.msgService.addMessage(this.auteur, this.contenu);
    this.clear();
  }

  clear() {
    this.contenu = '';
  }
}
