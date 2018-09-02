import { Component } from '@angular/core';
import { PureSettingsContainerService } from '../../pure-containers/pure-settings-container/pure-settings-container.service';

@Component({
  selector: 'pure-settings',
  templateUrl: './pure-settings.component.html',
  styleUrls: ['./pure-settings.component.scss']
})
export class PureSettings {
  themes = [
    { id: 'default', name: 'Default (Light)' },
    { id: 'aaaa', name: 'AAAA (Light)' },
    { id: 'bbbb', name: 'BBBB (Dark)' },
    { id: 'dddd', name: 'DDDD (Dark)' }
  ];

  constructor(public _settingsContainer: PureSettingsContainerService) { }
}
