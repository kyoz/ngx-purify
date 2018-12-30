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
