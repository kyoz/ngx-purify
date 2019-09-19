import { Component, OnInit, OnDestroy, AfterViewChecked, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PureChatboxService } from './pure-chatbox.service';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ChatboxContact, ChatboxMessage } from '../../pure-models/chatbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pure-chatbox',
  templateUrl: './pure-chatbox.component.html',
  styleUrls: ['./pure-chatbox.component.scss']
})
export class PureChatbox implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('message_input', { static: false }) messageInputRef: ElementRef;
  @ViewChild('messages_content', { static: false }) messagesContentScrollbar?: PerfectScrollbarDirective;

  messageInput: string;

  messagesChangeSubscription: Subscription = undefined;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _deviceDetector: DeviceDetectorService,
    public _chatbox: PureChatboxService,
    public _chatboxContainer: PureChatboxContainerService,
    public _settings: PureSettingsService) {
      this._chatbox.getContacts();
  }

  ngOnInit() {
    this.messagesChangeSubscription = this._chatbox.currentMessages$.subscribe(() => {
      this._changeDetectorRef.detectChanges();

      if (this._chatbox.inConversation) {
        this.scrollChatboxToBottom();
      }
    });
  }

  ngOnDestroy() {
    if (this.messagesChangeSubscription) {
      this.messagesChangeSubscription.unsubscribe();
    }
  }

  ngAfterViewChecked() {
    this._changeDetectorRef.detach();
  }

  startConversation(contact: ChatboxContact) {
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
