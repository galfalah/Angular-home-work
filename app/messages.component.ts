import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'messages',
    template: `
    <div class="col-md-6" >
        <h1>Messages List</h1>

        <ul class="list-group posts" style="overflow-y: scroll; height:300px" >
            <li *ngFor=" let m of messages" class="list-group-item" [class.active]="currentMessage==m" (click)="select(m)">
                Post_id: {{m.id}} , Title: {{m.title}} 
            </li>
        </ul>
    </div>
    `
})

export class MessagesComponent{
    currentMessage;
    @Input() messages = [];
    @Output() onSelectMessage = new EventEmitter();

    select(m){
        this.onSelectMessage.emit(m);
        this.currentMessage = m;
    }
    onScrollGal(event){
        console.log('scroll event', event);
    }
    
}