import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PureChatboxService } from './pure-chatbox.service';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';

@Component({
  selector: 'pure-chatbox',
  templateUrl: './pure-chatbox.component.html',
  styleUrls: ['./pure-chatbox.component.scss']
})
export class PureChatbox implements OnInit {
  @ViewChild('message_input') messageInputRef: ElementRef;
  @ViewChild('messages_content') messagesContentRef?: PerfectScrollbarDirective;

  messageInput;

  constructor(
    private _changeDetectionRef: ChangeDetectorRef,
    public _sideChatbox: PureChatboxService,
    public _chatboxContainer: PureChatboxContainerService,
    public _settings: PureSettingsService) {
      this._sideChatbox.getContacts();
  }

  ngOnInit() {
    this._sideChatbox.currentConversation$.subscribe(() => {
      if (this._sideChatbox.inConversation) {
        this.scrollChatboxToBottom();
      }
    });
  }

  startConversation(contact) {
    this.clearMessageInput();
    this._sideChatbox.chooseContact(contact.id)
    this.focusMessageInput();
  }

  sendMessage() {
    if (!this.messageInput || this.messageInput.trim().length === 0) return;

    this._sideChatbox.sendMessage(this.messageInput);
    this.clearMessageInput();
    this.focusMessageInput();
  }

  clearMessageInput() {
    this.messageInput = '';
    if (this.messageInputRef) {
      this.messageInputRef.nativeElement.style.height = '22px';
    }
  }

  focusMessageInput() {
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

    if (this.messagesContentRef) {
      this.messagesContentRef.update();
      this.messagesContentRef.scrollToBottom();
    }
  }

  isFirstOfGroup(index, message, messageList) {
    if (index === 0) return true;
    if (message.sender !== messageList[index - 1].sender) return true;
    return false;
  }

  isLastOfGroup(index, message, messageList) {
    if (index === messageList.length - 1) return true;
    if (message.sender !== messageList[index + 1].sender) return true;
    return false;
  }
}
