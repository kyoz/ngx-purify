import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureChatboxService } from './pure-chatbox.service';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ChatboxContact, ChatboxMessage } from '../../pure-models/chatbox';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pure-chatbox',
  templateUrl: './pure-chatbox.component.html',
  styleUrls: ['./pure-chatbox.component.scss']
})
export class PureChatbox implements OnInit {
  @ViewChild('message_input', { static: false }) messageInputRef: ElementRef;
  @ViewChild('messages_content', { static: false }) messagesContentScrollbar?: PerfectScrollbarDirective;

  messageInput: string;

  constructor(
    private _deviceDetector: DeviceDetectorService,
    public _chatbox: PureChatboxService,
    public _chatboxContainer: PureChatboxContainerService,
    public _settings: PureSettingsService) {
      this._chatbox.getContacts();
  }

  ngOnInit() {
    this._chatbox.currentConversation$.pipe(debounceTime(100)).subscribe(() => {
      if (this._chatbox.inConversation) {
        this.scrollChatboxToBottom();
      }
    });
  }

  startConversation(contact: ChatboxContact) {
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

  preventEnterKey(event: any) {
    event.preventDefault();
  }

  scrollChatboxToBottom() {
    if (this.messagesContentScrollbar) {
      this.messagesContentScrollbar.update();
      this.messagesContentScrollbar.scrollToBottom();
    }
  }

  isFirstOfGroup(index: number, message: ChatboxMessage, messageList: ChatboxMessage[]) {
    if (index === 0) {
      return true;
    }

    if (message.sender !== messageList[index - 1].sender) {
      return true;
    }

    return false;
  }

  isLastOfGroup(index: number, message: ChatboxMessage, messageList: ChatboxMessage[]) {
    if (index === messageList.length - 1) {
      return true;
    }

    if (message.sender !== messageList[index + 1].sender) {
      return true;
    }

    return false;
  }

  trackByContact(index: number, contact: ChatboxContact) {
    return contact.id;
  }

  trackByMessage(index: number) {
    return index;
  }
}
