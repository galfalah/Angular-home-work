import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';
import { NavBarComponent } from './navbar.component';
import { MessagesComponent } from './messages.component';
import { MessagesInfoComponent } from './messagedetailes.component';
import { MessagesService } from './messages.service'

@Component({
  selector: 'message-container',
  template: '<navbar [messagesCount]="messageCount"></navbar>  <a (click)="loadMor()">Reload Mor posts</a>  <messages [(messages)]="messagesToShow" (onSelectMessage)="onSelectMessage($event)"></messages> <messagesInfo [message]="currentMessage"></messagesInfo>'
})
export class MessagesContainer implements OnInit,OnChanges {
  messages = [];
  messagesToShow=[];
  currentMessage;
  messageCount;
  count = 10;
  left =0;

  constructor(private _messgesService: MessagesService) {
    
  }
  onSelectMessage(message) {
    debugger
    console.log(1111111)
    this.currentMessage = message
    console.log(2222222)
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

  
  loadMor(event){
    for(let i = this.count ; i < this.count + 10 && i < this.messages.length; i++ ){ 
        this.messagesToShow.push(this.messages[i]);
    } 
    this.messageCount = this.messagesToShow.length
    this.count += 10;
  }
  

}
