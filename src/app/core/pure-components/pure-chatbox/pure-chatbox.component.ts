import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { PureChatboxService } from './pure-chatbox.service';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ChatboxContact, ChatboxMessage } from '../../../shared/models/chatbox.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pure-chatbox',
  templateUrl: './pure-chatbox.component.html',
  styleUrls: ['./pure-chatbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureChatbox implements OnInit, OnDestroy {
  @ViewChild('message_input', { static: false }) messageInputRef: ElementRef;
  @ViewChild('messages_content', { static: false }) messagesContentScrollbar?: PerfectScrollbarDirective;

  messageInput: string;

  isDetactedChangeDetection = false;

  private subscriptions: Map<String, Subscription> = new Map();

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _deviceDetector: DeviceDetectorService,
    public _chatbox: PureChatboxService,
    public _chatboxContainer: PureChatboxContainerService,
    public _settings: PureSettingsService) {
      this._chatbox.getContacts();
  }

  ngOnInit() {
    this.detectWhenMessagesChanged();
    this.detectWhenChatboxContainerOpened();
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
      this._chatbox.currentMessages$.subscribe(() => {
        this._changeDetectorRef.detectChanges();

        if (this._chatbox.inConversation) {
          this.scrollChatboxToBottom();
        }
      })
    );
  }

  detectWhenChatboxContainerOpened() {
    this.subscriptions.set('detectWhenChatboxContainerOpened',
      this._chatboxContainer.isOpened$.subscribe((isOpened: boolean) => {
        if (isOpened && !this._chatbox.inConversation) {
          this._changeDetectorRef.detectChanges();
        }
      })
    );
  }

  startConversation(contact: ChatboxContact) {
    // Not get new data of current contact conversation
    if (this._chatbox.inConversation && this._chatbox.currentContact.id === contact.id) {
      this._chatboxContainer.open();
      this.scrollChatboxToBottom();
      this.focusMessageInput();
      this._changeDetectorRef.detectChanges();
      return;
    }

    this.clearMessageInput();
    this._chatbox.chooseContact(contact.id);
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

    this._chatbox.sendMessage(message);
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

    if (message.sender !== this._chatbox.currentMessages[index - 1].sender) {
      return true;
    }

    return false;
  }

  isLastMessageOfGroup(index: number, message: ChatboxMessage) {
    if (index === this._chatbox.currentMessages.length - 1) {
      return true;
    }

    if (message.sender !== this._chatbox.currentMessages[index + 1].sender) {
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
