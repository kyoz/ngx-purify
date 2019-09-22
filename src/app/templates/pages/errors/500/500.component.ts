import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'error-500',
  templateUrl: './500.component.html',
  styleUrls: ['./500.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error500Component {
  refresh() {
    window.location.reload();
  }
}

