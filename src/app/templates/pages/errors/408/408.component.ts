import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'error-408',
  templateUrl: './408.component.html',
  styleUrls: ['./408.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error408Component {
  refresh() {
    window.location.reload();
  }
}

