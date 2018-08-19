import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pure-chatbox',
  templateUrl: './pure-chatbox.component.html',
  styleUrls: ['./pure-chatbox.component.scss']
})
export class PureChatbox implements OnInit {

  contacts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  constructor() { }

  ngOnInit() {
  }

}
