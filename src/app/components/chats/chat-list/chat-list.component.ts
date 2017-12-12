import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Chat } from '../../../models/chat.model';
import { ChatService } from '../../../services/chat.service';

@Component({
    selector: 'app-chat-list',
    templateUrl: './chat-list.component.html',
    styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
    chats: Chat [];
    subcription: Subscription;

    constructor(private chatService: ChatService) { }

    ngOnInit() {
        this.subcription = this.chatService.chatChanged.subscribe((chats: Chat[]) => {
            this.chats = chats;
        });
        this.chatService.getChats();
    }

}
