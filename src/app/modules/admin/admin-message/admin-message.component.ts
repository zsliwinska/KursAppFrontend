import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminMessageService } from '../admin-message.service';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.scss']
})
export class AdminMessageComponent implements OnInit, OnDestroy {

  messages: Array<string> = [];
  private clickCounter: number = 0;

  constructor(private adminMessageService: AdminMessageService){}

  ngOnInit(): void {
    this.adminMessageService.subject.subscribe(messages => {
      this.messages = messages;
      this.timeoutColseMessages();
    });
  }

  private timeoutColseMessages() {
    this.clickCounter++;
    setTimeout(() => {
      if (this.clickCounter == 1) {
        this.clear();
      }
      this.clickCounter--;
    }, 12000);
  }

  clear(){
    this.messages = [];
    this.adminMessageService.clear();
  }

  ngOnDestroy(): void {
    this.adminMessageService.subject.unsubscribe();
  }
}
