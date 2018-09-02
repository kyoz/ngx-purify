import { Component } from '@angular/core';
import { PureSettingsContainerService } from './pure-settings-container.service';

@Component({
  selector: 'pure-settings-container',
  templateUrl: './pure-settings-container.component.html',
  styleUrls: ['./pure-settings-container.component.scss']
})
export class PureSettingsContainer {
  constructor(public _settingsContainer: PureSettingsContainerService) { }
}
