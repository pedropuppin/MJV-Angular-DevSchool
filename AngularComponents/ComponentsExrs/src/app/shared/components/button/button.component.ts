import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <button (click)="triggerOutput()">Trigger output</button>
  `,
})
export class ButtonComponent {
  triggerOutput() {
    console.log('Button clicked!');
  }
}
