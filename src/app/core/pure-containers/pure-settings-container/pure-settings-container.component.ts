import { Component, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsContainerService } from './pure-settings-container.service';

@Component({
  selector: 'pure-settings-container',
  templateUrl: './pure-settings-container.component.html',
  styleUrls: ['./pure-settings-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureSettingsContainer {
  @ViewChild('pure_settings_container', { static: false }) pureSettingsContainer: ElementRef;

  constructor(public _settingsContainer: PureSettingsContainerService) {}
}
