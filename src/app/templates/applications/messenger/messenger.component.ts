import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsService } from '../../../core/pure-services/pure-settings.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessengerApp implements OnInit {
  photos = [ 'adrien.jpg', 'albertha.jpg', 'halen.jpg', 'makhi.jpg', 'maxine.jpg', 'nathaniel.jpg', 'tom.jpg', 'kyoz.jpg' ];

  files = [
    { name: 'recorded.mp3', size: '3 MB' },
    { name: 'test.mp3', size: '0.3 MB' },
    { name: 'total.xsl', size: '1.2 MB' }
  ];

  links = [
    { name: 'New Blog', url: 'https://mywebsite.com/blog' },
    { name: 'My facebook', url: 'https://facebook.com/my_facebook' },
  ];

  constructor(
    public _settings: PureSettingsService) {
  }

  ngOnInit() {
  }

}
