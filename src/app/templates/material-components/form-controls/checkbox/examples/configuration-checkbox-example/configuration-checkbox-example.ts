import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'configuration-checkbox-example',
  templateUrl: './configuration-checkbox-example.html',
  styleUrls: ['./configuration-checkbox-example.scss']
})
export class ConfigurationCheckboxExample implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  constructor() { }

  ngOnInit(): void { }
}
