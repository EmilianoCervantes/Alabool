import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Chat } from '../../../models/chat.model';
import { ChatService } from '../../../services/chat.service';

@Component({
    selector: 'app-chat-detail',
    templateUrl: './chat-detail.component.html',
    styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit {
    chat: Chat;
    id: number;

    constructor(private chatService: ChatService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.chat = this.chatService.getChat(this.id);
        });
    }

    onDisplayGraficas() {
        this.router.navigate(['graph'], { relativeTo: this.route });
    }
}
