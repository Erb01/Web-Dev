import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: ` <div contentEditable="false" [contentEditable]="isEditable"></div> `,
})
export class App {
  isEditable = true;
}
