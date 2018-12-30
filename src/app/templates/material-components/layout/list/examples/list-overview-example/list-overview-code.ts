export const html = `
<mat-list>
  <h3 mat-subheader>Folders</h3>
  <mat-list-item *ngFor="let folder of folders">
    <mat-icon mat-list-icon>folder</mat-icon>
    <h4 mat-line>{{folder.name}}</h4>
    <p mat-line> {{folder.updated | date}} </p>
  </mat-list-item>
  <mat-divider></mat-divider>
  <h3 mat-subheader>Notes</h3>
  <mat-list-item *ngFor="let note of notes">
    <mat-icon mat-list-icon>note</mat-icon>
    <h4 mat-line>{{note.name}}</h4>
    <p mat-line> {{note.updated | date}} </p>
  </mat-list-item>
</mat-list>
`;

export const ts = `
import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'list-overview-example',
  templateUrl: './list-overview-example.html',
  styleUrls: ['./list-overview-example.scss']
})
export class ListOverviewExample {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
}
`;

export const scss = `
.mat-list-icon {
  color: rgba(0, 0, 0, 0.54);
}
`;
