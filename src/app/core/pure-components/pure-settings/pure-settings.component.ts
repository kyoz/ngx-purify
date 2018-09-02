import { Component } from '@angular/core';
import { PureSettingsContainerService } from '../../pure-containers/pure-settings-container/pure-settings-container.service';

@Component({
  selector: 'pure-settings',
  templateUrl: './pure-settings.component.html',
  styleUrls: ['./pure-settings.component.scss']
})
export class PureSettings {
  constructor(public _settingsContainer: PureSettingsContainerService) { }
}
