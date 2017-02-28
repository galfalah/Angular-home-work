"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var messages_service_1 = require("./messages.service");
var MessagesContainer = (function () {
    function MessagesContainer(_messgesService) {
        this._messgesService = _messgesService;
        this.messages = [];
        this.messagesToShow = [];
        this.count = 10;
        this.left = 0;
    }
    MessagesContainer.prototype.onSelectMessage = function (message) {
        debugger;
        console.log(1111111);
        this.currentMessage = message;
        console.log(2222222);
    };
    MessagesContainer.prototype.splitData = function (howManyToShow) {
        for (var i = 0; i < howManyToShow; i++)
            this.messagesToShow.push(this.messages[i]);
    };
    MessagesContainer.prototype.onDataRecieved = function (data) {
        this.messages = JSON.parse(data._body);
        this.splitData(10);
        this.messageCount = this.messagesToShow.length;
    };
    MessagesContainer.prototype.ngOnInit = function () {
        this._messgesService.getMessages().subscribe(this.onDataRecieved.bind(this));
    };
    MessagesContainer.prototype.ngOnChanges = function () {
        debugger;
    };
    MessagesContainer.prototype.loadMor = function (event) {
        for (var i = this.count; i < this.count + 10 && i < this.messages.length; i++) {
            this.messagesToShow.push(this.messages[i]);
        }
        this.messageCount = this.messagesToShow.length;
        this.count += 10;
    };
    return MessagesContainer;
}());
MessagesContainer = __decorate([
    core_1.Component({
        selector: 'message-container',
        template: '<navbar [messagesCount]="messageCount"></navbar>  <a (click)="loadMor()">Reload Mor posts</a>  <messages [(messages)]="messagesToShow" (onSelectMessage)="onSelectMessage($event)"></messages> <messagesInfo [message]="currentMessage"></messagesInfo>'
    }),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesContainer);
exports.MessagesContainer = MessagesContainer;
//# sourceMappingURL=messagesContainer.component.js.map