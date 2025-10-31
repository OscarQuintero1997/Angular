import { Component } from "@angular/core";


@Component({
  template:`
  <h1>Counter ={{counter}}</h1>
 <h2>CounterComponent Page</h2>
 <button (click)="increaseBy(3)">+1</button>
  `,
})

export class CounterPageComponent{
  counter = 15;

    increaseBy(value:  number) {
    this.counter += value
  };
}










