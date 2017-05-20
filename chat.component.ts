
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MockDeviceService } from './mock-device.service';

@Component({
    selector: 'chat',
    template: `
        <div class="messages">
            <p *ngFor="let msg of messages">{{ msg }}</p>
        </div>
    `
})
export class Chat {
    private messages: string[] = new Array();
 private dataStream:Observable<string>;

   private anyErrors:boolean;
  private finished:boolean;

    constructor(private sc: MockDeviceService) {
 
    this.dataStream=sc.init("ws://localhost:3000/mock/23456");
       
  this.dataStream.subscribe(
          (value:any) => this.messages.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
      );

    }
}
