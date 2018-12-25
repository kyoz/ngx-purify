export const html = `
<mat-drawer-container class="example-container" autosize>
  <mat-drawer #drawer class="example-sidenav" mode="side">
    <p>Auto-resizing sidenav</p>
    <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>
    <button (click)="showFiller = !showFiller" mat-raised-button>
      Toggle extra text
    </button>
  </mat-drawer>

  <div class="example-sidenav-content">
    <button type="button" mat-button (click)="drawer.toggle()">
      Toggle sidenav
    </button>
  </div>

</mat-drawer-container>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'autosize-sidenav-example',
  templateUrl: './autosize-sidenav-example.html',
  styleUrls: ['./autosize-sidenav-example.scss']
})
export class AutosizeSidenavExample {
  showFilter = false;
}
`;

export const scss = `
.example-container {
  width: 500px;
  max-width: 100%;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.example-sidenav-content {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.example-sidenav {
  padding: 20px;
}
`;
