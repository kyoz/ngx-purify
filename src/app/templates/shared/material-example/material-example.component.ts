import { Component, Input } from '@angular/core';

@Component({
  selector: 'material-example',
  templateUrl: './material-example.component.html',
  styleUrls: ['./material-example.component.scss']
})
export class MaterialExampleComponent {

  isViewingCode = false;

  @Input() title: string;
  @Input() code: any;

  constructor() { }

  toggleView() {
    this.isViewingCode = !this.isViewingCode;
  }
}
