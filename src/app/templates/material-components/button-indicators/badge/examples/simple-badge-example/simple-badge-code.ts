export const html = `
<p>
  <span matBadge="4" matBadgeOverlap="false">Text with a badge</span>
</p>

<p>
  Button with a badge on the left
  <button mat-raised-button color="primary"
      matBadge="8" matBadgePosition="before" matBadgeColor="accent">
    Action
  </button>
</p>

<p>
  Icon with a badge
  <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
</p>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'simple-badge-example',
  templateUrl: './simple-badge-example.html',
  styleUrls: ['./simple-badge-example.scss']
})
export class SimpleBadgeExample {
}
`;

export const scss = `
p {
  margin: 24px 0;
}
`;
