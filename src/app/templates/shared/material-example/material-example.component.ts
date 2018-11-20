import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-example',
  templateUrl: './material-example.component.html',
  styleUrls: ['./material-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialExampleComponent implements OnInit {

  isViewingCode = false;

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

  toggleView() {
    this.isViewingCode = !this.isViewingCode;
  }
}
