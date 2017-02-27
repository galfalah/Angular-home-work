import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MessagesComponent} from './messages.component';
import {MessagesInfoComponent} from './messagedetailes.component';
import {MessagesContainer} from './messagesContainer.component';
import {MessagesService} from './messages.service';
import {NavBarComponent} from './navbar.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule , HttpModule ],
  declarations: [ 
      AppComponent,
      MessagesComponent,
      NavBarComponent,
      MessagesInfoComponent,
      MessagesContainer,
      
    ],
     providers:[MessagesService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
