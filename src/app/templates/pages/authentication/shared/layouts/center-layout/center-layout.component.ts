import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-center-layout',
  templateUrl: './center-layout.component.html',
  styleUrls: ['./center-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthCenterLayoutComponent {
  @Input() title: string;
  @Input() showLogo: boolean = true;
  @Input() showTitle: boolean = true;
}
