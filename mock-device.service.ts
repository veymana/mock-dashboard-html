
import {Injectable} from '@angular/core';;
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MockDeviceService {

  private dataStream:Observable<string>;
  private anyErrors:boolean;
  private finished:boolean;

  constructor() {
  }
  
  public init(url:string) {
      
     return  this.dataStream = new Observable(observer => {

           let ws = new WebSocket(url);
           console.log(ws);
             ws.onopen = function(evt){
            console.log("Websocket got opened");
                       };
           ws.onmessage = function(evt){
            console.log(evt);
             observer.next(evt.data);
           };
           ws.onerror = function(evt){
            console.log(evt);
           };
           ws.onclose = function(evt){
            console.log(evt);
            observer.complete();
           }
   });

  }

}
