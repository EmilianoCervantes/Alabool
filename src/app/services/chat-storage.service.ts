import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { ChatService } from './chat.service';
import { Chat } from '../models/chat.model';

@Injectable()
export class ChatStorageService {

    constructor(private http: Http, private chatService: ChatService) { }

    storageChats() {
        return this.http.put('https://web-sac.firebaseio.com/chats.json', this.chatService.getChats());
    }

    storeChats(chats: any[]) {
        return this.http.post('https://web-sac.firebaseio.com/chats.json', chats);
    }

    getChats() {
        let headers = new Headers();
        headers.append('ContentType', 'application/json');
        let opts = new RequestOptions();
        opts.headers = headers;
        this.http.get('https://tickets-sac.firebaseio.com/tickets.json', opts)
            .subscribe((response: Response) => {
            const chats: Chat[] = response.json();
            this.chatService.setChats(chats);
        });
    }
}