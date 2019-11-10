import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-messenger-status',
  template: `
    <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="8px">
      <div class="indicator" [ngClass]="status"></div>
      <span class="status">{{ formattedStatus }}</span>
    </div>
  `,
  styles: [`
    .indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid rgba(0,0,0,.04);
    }

    .status {
      opacity: .52;
    }

    .online {
      background: #00E676;
    }

    .offline {
      background: #E0E0E0;
    }

    .busy {
      background: #FFD600;
    }

    .do-not-disturb {
      background: #F44336;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessengerAppStatus implements OnChanges {
  @Input() status: string = 'offline';

  formattedStatus: string;

  ngOnChanges() {
    this.formattedStatus = this.status[0].toUpperCase() +
      this.status.replace(/-/g, ' ').substring(1);
  }
}
