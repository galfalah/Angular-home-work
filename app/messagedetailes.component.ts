import {Component , Input, Output} from '@angular/core'
import {MessagesService} from './messages.service'

@Component({
    selector: 'messagesInfo',
    template: `

    <div class="col-md-6">
        <h1>Message Info</h1>
        <div *ngIf="message">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{{ message.title }}</h3>
                </div>
                <div class="panel-body">
                    <p>{{ message.body }}</p>
                    <hr/> 
                </div>
            </div>
        </div>
    </div>
    `
})

export class MessagesInfoComponent{
    @Input() message;
    
}