import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox-configuration-example',
  templateUrl: './checkbox-configuration-example.html',
  styleUrls: ['./checkbox-configuration-example.scss']
})
export class CheckboxConfigurationExample implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  constructor() { }

  ngOnInit(): void { }
}
