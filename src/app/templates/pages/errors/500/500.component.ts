import { Component } from '@angular/core';

@Component({
  selector: 'error-500',
  templateUrl: './500.component.html',
  styleUrls: ['./500.component.scss']
})
export class Error500Component {
  refresh() {
    window.location.reload();
  }
}

