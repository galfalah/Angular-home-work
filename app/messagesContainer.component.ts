import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';
import { NavBarComponent } from './navbar.component';
import { MessagesComponent } from './messages.component';
import { MessagesInfoComponent } from './massagedetailes.component';
import { MessagesService } from './messages.service'

@Component({
  selector: 'message-container',
  template: '<navbar [messagesCount]="messageCount"></navbar>  <a (click)="myFunc()">Reload Mor posts</a>  <messages [(messages)]="messagesToShow"></messages><messagesInfo [message]="currentMessage"></messagesInfo>'
})
export class MessagesContainer implements OnInit,OnChanges {
  messages = [];
  messagesToShow=[];
  currentMessage;
  messageCount;
  count = 10;
  left =0;
  flagLefMessage = false;

  constructor(private _messgesService: MessagesService) {
  }

  splitData(howManyToShow){
    for(let i = 0 ; i < howManyToShow ; i++ )
      this.messagesToShow.push(this.messages[i])
  }

  onDataRecieved(data){
    this.messages = JSON.parse(data._body);
    this.splitData(10);
    this.messageCount = this.messagesToShow.length
  }

  ngOnInit() {
    this._messgesService.getMessages().subscribe(this.onDataRecieved.bind(this));
  }

  ngOnChanges(){
    debugger;
  }

  onSelectMessage(message) {
    this.currentMessage = message
  }
  myFunc(event){
    for(let i = this.count ; i < this.count + 10 && i < this.messages.length; i++ ){ 
        this.messagesToShow.push(this.messages[i]);
    } 
    this.messageCount = this.messagesToShow.length
    this.count += 10;
  }
  

}
