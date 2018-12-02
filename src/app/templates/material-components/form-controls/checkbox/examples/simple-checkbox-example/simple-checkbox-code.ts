export const html = `
<mat-checkbox>Check me!</mat-checkbox>
`;

export const ts = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-checkbox-example',
  templateUrl: './simple-checkbox-example.html',
  styleUrls: ['./simple-checkbox-example.scss']
})
export class SimpleCheckboxExample implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
`;

export const scss = `
/** No CSS for this example */
`;
