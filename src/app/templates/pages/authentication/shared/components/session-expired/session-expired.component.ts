import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['session-expired.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSessionExpiredComponent {
}
