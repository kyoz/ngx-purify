import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-minimal-container',
  templateUrl: './minimal-container.component.html',
  styleUrls: ['./minimal-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinimalContainer {
  constructor() { }
}
