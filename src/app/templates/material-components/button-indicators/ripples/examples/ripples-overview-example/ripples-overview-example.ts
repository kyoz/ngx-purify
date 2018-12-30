import { Component } from '@angular/core';

@Component({
  selector: 'ripples-overview-example',
  templateUrl: './ripples-overview-example.html',
  styleUrls: ['./ripples-overview-example.scss']
})
export class RipplesOverviewExample {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}
