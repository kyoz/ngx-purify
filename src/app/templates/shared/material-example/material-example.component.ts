import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-example',
  templateUrl: './material-example.component.html',
  styleUrls: ['./material-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialExampleComponent implements OnInit {

  isViewingCode = false;
  code = `123`;

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

  initCodes() {

  }

  toggleView() {
    this.isViewingCode = !this.isViewingCode;
  }
}
