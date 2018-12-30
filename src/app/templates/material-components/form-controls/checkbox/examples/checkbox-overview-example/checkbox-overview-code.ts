export const html = `
<mat-checkbox>Check me!</mat-checkbox>
`;

export const ts = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox-overview-example',
  templateUrl: './checkbox-overview-example.html',
  styleUrls: ['./checkbox-overview-example.scss']
})
export class CheckboxOverviewExample implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
`;

export const scss = `
/** No CSS for this example */
`;
