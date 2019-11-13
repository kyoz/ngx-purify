import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { PureSettingsService } from '../../../core/pure-services/pure-settings.service';
import { PureMenuContainerService } from '../../../core/pure-containers/pure-menu-container/pure-menu-container.service';
import { MessengerAppService } from './messenger.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ChatboxContact, ChatboxMessage } from '../../../shared/models/chatbox.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessengerApp implements OnInit {
  @ViewChild('message_input', { static: false }) messageInputRef: ElementRef;
  @ViewChild('messages_content', { static: false }) messagesContentScrollbar?: PerfectScrollbarDirective;

  messageInput: string;

  isDetactedChangeDetection = false;

  private subscriptions: Map<String, Subscription> = new Map();

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
    private _changeDetectorRef: ChangeDetectorRef,
    private _deviceDetector: DeviceDetectorService,
    public _settings: PureSettingsService,
    public _menuContainer: PureMenuContainerService,
    public _messenger: MessengerAppService) {
  }

  ngOnInit() {
    this.detectWhenMessagesChanged();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  detectWhenMessagesChanged() {
    this.subscriptions.set('detectWhenMessagesChanged',
      this._messenger.currentMessages$.subscribe(() => {
        this._changeDetectorRef.detectChanges();

        if (this._messenger.inConversation) {
          this.scrollChatboxToBottom();
        }
      })
    );
  }

  startConversation(contact: ChatboxContact) {
    if (this._messenger.inConversation && this._messenger.currentContact.id === contact.id) {
      this.scrollChatboxToBottom();
      this.focusMessageInput();
      this._changeDetectorRef.detectChanges();
      return;
    }

    this.clearMessageInput();
    this._messenger.chooseContact(contact.id);
    this.focusMessageInput();
    this._changeDetectorRef.detectChanges();
  }

  sendMessage() {
    if (!this.messageInput || this.messageInput.trim().length === 0) {
      return;
    }

    const message = this.messageInput.trim();

    this.clearMessageInput();
    this.focusMessageInput();

    this._messenger.sendMessage(message);
  }

  clearMessageInput() {
    this.messageInput = '';

    if (this.messageInputRef) {
      this.messageInputRef.nativeElement.style.height = '22px';
      this.messageInputRef.nativeElement.value = '';
    }
  }

  focusMessageInput() {
    // In mobile device, everytime an input is focus, the keyboard is pushup.
    // It's kind of annoying will small screen device so i do not focus on mobile.
    if (this._deviceDetector.isMobile()) {
      return;
    }
    setTimeout(() => {
      if (this.messageInputRef) {
        this.messageInputRef.nativeElement.focus();
      }
    }, 200);
  }

  resizeMessageInput() {
    this.messageInputRef.nativeElement.style.height = '22px';
    if (this.messageInputRef.nativeElement.scrollHeight > 58) {
      this.messageInputRef.nativeElement.style.height = this.messageInputRef.nativeElement.scrollHeight + 'px';
    }
  }

  preventEnterKey(event: any) {
    event.preventDefault();
  }

  scrollChatboxToBottom() {
    if (this.messagesContentScrollbar) {
      this.messagesContentScrollbar.update();
      this.messagesContentScrollbar.scrollToBottom();
    }
  }

  isFirstMessageOfGroup(index: number, message: ChatboxMessage) {
    if (index === 0) {
      return true;
    }

    if (message.sender !== this._messenger.currentMessages[index - 1].sender) {
      return true;
    }

    return false;
  }

  isLastMessageOfGroup(index: number, message: ChatboxMessage) {
    if (index === this._messenger.currentMessages.length - 1) {
      return true;
    }

    if (message.sender !== this._messenger.currentMessages[index + 1].sender) {
      return true;
    }

    return false;
  }

  trackByContact(index: number, contact: ChatboxContact) {
    return contact.id;
  }

  trackByMessage(index: number, message: ChatboxMessage) {
    return message.id;
  }
}
