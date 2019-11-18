import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact-menu',
  template: `
    <button class="menu-item active" mat-ripple fxLayoutAlign="start center" fxLayoutGap="16px"
            [class.active]="currentDataFilter === 'all'"
            (click)="changeFilter('all')">
      <mat-icon class="pure-icon-foreground">account_circle</mat-icon>
      <span class="pure-foreground">Contacts</span>
      <span class="indicator"></span>
    </button>

    <button class="menu-item" mat-ripple fxLayoutAlign="start center" fxLayoutGap="16px"
            [class.active]="currentDataFilter === 'favorite'"
            (click)="changeFilter('favorite')">
      <mat-icon class="pure-icon-foreground">star</mat-icon>
      <span class="pure-foreground">Favorite Contacts</span>
      <span class="indicator"></span>
    </button>

    <button class="menu-item" mat-ripple fxLayoutAlign="start center" fxLayoutGap="16px"
            [class.active]="currentDataFilter === 'frequently'"
            (click)="changeFilter('frequently')">
      <mat-icon class="pure-icon-foreground">restore</mat-icon>
      <span class="pure-foreground">Frequently Contacts</span>
      <span class="indicator"></span>
    </button>

    <mat-divider style="margin-top: 16px; margin-bottom: 16px"></mat-divider>

    <button class="menu-item" mat-ripple fxLayoutAlign="start center" fxLayoutGap="16px">
      <mat-icon class="pure-icon-foreground" appearance="outline">cloud_upload</mat-icon>
      <span class="pure-foreground">Import</span>
    </button>

    <button class="menu-item" mat-ripple fxLayoutAlign="start center" fxLayoutGap="16px">
      <mat-icon class="pure-icon-foreground" appearance="outline">cloud_download</mat-icon>
      <span class="pure-foreground">Export</span>
    </button>

    <button class="menu-item" mat-ripple fxLayoutAlign="start center" fxLayoutGap="16px">
      <mat-icon class="pure-icon-foreground">print</mat-icon>
      <span class="pure-foreground">Print</span>
    </button>
  `,
  styles: [`
    .menu-item {
      width: 100%;
      height: 52px;
      background: none;
      border: none;
      outline: none;
      font-size: .9em;
      padding: 0 20px;
      cursor: pointer;
    }

    .indicator {
      position: absolute;
      left: 0px;
      top: 6px;
      bottom: 6px;
      width: 5px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactAppMenu {
  currentDataFilter: 'all' | 'favorite' | 'frequently' = 'all';

  changeFilter(filterType) {
    this.currentDataFilter = filterType;
  }
}
