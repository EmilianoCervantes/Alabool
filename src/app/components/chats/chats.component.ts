import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
  providers: [ChatService]
})
export class ChatsComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit() { }

}
