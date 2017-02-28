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
var MessagesComponent = (function () {
    function MessagesComponent() {
        this.messages = [];
        this.onSelectMessage = new core_1.EventEmitter();
    }
    MessagesComponent.prototype.select = function (m) {
        console.log("gal", m);
        debugger;
        this.onSelectMessage.emit(m);
        console.log("gal", m);
        this.currentMessage = m;
    };
    return MessagesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "messages", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "onSelectMessage", void 0);
MessagesComponent = __decorate([
    core_1.Component({
        selector: 'messages',
        template: "\n    <div class=\"col-md-6\" >\n        <h1>Messages List</h1>\n\n        <ul class=\"list-group posts\" style=\"overflow-y: scroll; height:300px\" >\n            <li *ngFor=\" let m of messages\" class=\"list-group-item\" [class.active]=\"currentMessage==m\" (click)=\"select(m)\">\n                Post_id: {{m.id}} , Title: {{m.title}} \n            </li>\n        </ul>\n    </div>\n    "
    })
], MessagesComponent);
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map