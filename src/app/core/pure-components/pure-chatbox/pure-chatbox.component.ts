import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { PureChatboxService } from './pure-chatbox.service';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'pure-chatbox',
  templateUrl: './pure-chatbox.component.html',
  styleUrls: ['./pure-chatbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureChatbox implements OnInit {
  @ViewChild('message_input') messageInputRef: ElementRef;
  @ViewChild('messages_content') messagesContentScrollbar?: PerfectScrollbarDirective;

  messageInput;

  constructor(
    private _changeDetectionRef: ChangeDetectorRef,
    private _deviceDetector: DeviceDetectorService,
    public _chatbox: PureChatboxService,
    public _chatboxContainer: PureChatboxContainerService,
    public _settings: PureSettingsService) {
      this._chatbox.getContacts();
  }

  ngOnInit() {
    this._chatbox.currentConversation$.subscribe(() => {
      if (this._chatbox.inConversation) {
        this.scrollChatboxToBottom();
      }
    });
  }

  startConversation(contact) {
    this.clearMessageInput();
    this._chatbox.chooseContact(contact.id);
    this.focusMessageInput();
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

  preventEnterKey(event) {
    event.preventDefault();
  }

  scrollChatboxToBottom() {
    this._changeDetectionRef.detectChanges();

    if (this.messagesContentScrollbar) {
      this.messagesContentScrollbar.update();
      this.messagesContentScrollbar.scrollToBottom();
    }
  }

  isFirstOfGroup(index, message, messageList) {
    if (index === 0) {
      return true;
    }

    if (message.sender !== messageList[index - 1].sender) {
      return true;
    }

    return false;
  }

  isLastOfGroup(index, message, messageList) {
    if (index === messageList.length - 1) {
      return true;
    }

    if (message.sender !== messageList[index + 1].sender) {
      return true;
    }

    return false;
  }
}
