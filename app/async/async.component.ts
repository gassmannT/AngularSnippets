import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Component({
    template: `
    <h1>AsyncPipe</h1>
 <div>
  <h2>AsyncPipe Angular 4 Style</h2>
  <p ngNonBindable>{{ observable | async }}
  <p>{{ observable | async }}&nbsp;</p>
  <h2>Without any pipe Angular 2 Style</h2> 
  <p ngNonBindable>{{ observableNotAsync }}
  <p>{{ observableNotAsync }}&nbsp;</p> 
 </div>
`
})
export class AsyncComponent {
    observable: Observable<number>;
    observableNotAsync: number;

    constructor() {
        this.observable = this.getObservable();

        this.getObservable()
            .subscribe(r => this.observableNotAsync = r);

    }

    getObservable() {
        return Observable
            .interval(1000)
            .take(10)
            .map((v: any) => v * v)
    }
}