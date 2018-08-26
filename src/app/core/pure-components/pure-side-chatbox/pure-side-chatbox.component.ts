import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PureSideChatboxService } from './pure-side-chatbox.service';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'pure-side-chatbox',
  templateUrl: './pure-side-chatbox.component.html',
  styleUrls: ['./pure-side-chatbox.component.scss']
})
export class PureSideChatbox implements OnInit {
  @ViewChild('message_input') messageInputRef: ElementRef;
  @ViewChild('messages_content') messagesContentRef?: PerfectScrollbarDirective;

  messageInput;

  constructor(
    private _changeDetectionRef: ChangeDetectorRef,
    public _sideChatbox: PureSideChatboxService) {
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
  }

  sendMessage() {
    this.clearMessageInput();
  }

  clearMessageInput() {
    this.messageInput = '';
    if (this.messageInputRef) {
      this.messageInputRef.nativeElement.style.height = '22px';
    }
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
