import { Component, Input } from '@angular/core';

@Component({
  selector: 'auth-center-layout',
  templateUrl: './center-layout.component.html',
  styleUrls: ['./center-layout.component.scss']
})
export class AuthCenterLayoutComponent {
  @Input() title: string;
  @Input() showLogo: boolean = true;
  @Input() showTitle: boolean = true;
}
