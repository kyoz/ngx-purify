export const html = `
<mat-chip-list class="mat-chip-list-stacked">
  <mat-chip *ngFor="let chip of availableColors" selected [color]="chip.color">
    {{chip.name}}
  </mat-chip>
</mat-chip-list>
`;

export const ts = `
import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'chips-stacked-example',
  templateUrl: './chips-stacked-example.html',
  styleUrls: ['./chips-stacked-example.scss']
})
export class ChipsStackedExample {
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];
}
`;

export const scss = `
mat-chip {
  max-width: 200px;
}
`;
