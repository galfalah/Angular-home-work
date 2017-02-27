import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar.component.html'
})
export class NavBarComponent { 
  @Input() messagesCount=1 ;
}
