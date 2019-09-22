import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComingSoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
