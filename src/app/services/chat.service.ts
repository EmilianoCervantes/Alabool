import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { Chat } from '../models/chat.model';

@Injectable()
export class ChatService {

  index: number;
  private chats: Chat[];
  chatChanged = new Subject<Chat[]>();
  apiRoot: string = 'https://itunes.apple.com/search';

  /*
    private chats: Chat [] = [
        new Chat(234, 'Rolcar', 'Gerardo Ruiz', 'Geovanni Arrieta', '18-10-2017'),
        new Chat(235, 'Psicofarma', 'Carlos Toledo', 'Jimena Cortés', '18-10-2017'),
        new Chat(236, 'Rolcar', 'Miguel Cortines', 'Geovanni Arrieta', '18-10-2017'),
        new Chat(237, 'Alambrados', 'Francisco Morales', 'Miguel Zavala', '18-10-2017'),
        new Chat(238, 'Alabool', 'José Ventura', 'Geovanni Arrieta', '18-10-2017'),
    ];*/

  constructor(private http: Http, private jsonp: Jsonp) { }

  /*
    getChats() {
        return this.chats.slice();
    }*/

  getChat(id: number) {
    for (this.index = 0; this.index < this.chats.length; this.index++) {
      if (id === this.chats[this.index].id) {
        return this.chats[this.index];
      }
    }
  }

  setChats(chats: Chat[]) {
    this.chats = chats;
    this.chatChanged.next(this.chats.slice());
  }

  /*getChats() {
        this.http.get('http://localhost:4200/assets/chats.json')
            .subscribe((response: Response) => {
            const chats: Chat[] = response.json();
            this.setChats(chats);
        });
    }*/

  /*getChats() {
    let url = 'https://itunes.apple.com/search?term=amor&media=music&limit=20&callback=JSONP_CALLBACK';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    this.jsonp.get(url).map(res => res.json())
      .subscribe(data => console.log(data), error => console.log(error));
  }*/

  
  getChats() {
    const headers = new Headers();
    /*headers.append('Authorization', '8c149a3d-4acf-362e-880c-30ec2f5ecaf7');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept');

    const opts = new RequestOptions();
    opts.headers = headers;*/

    this.http.get('http://localhost:3000/api/Chats/Online').subscribe((data) => {
      console.log(data.json());
      const chats: Chat[] = data.json();
      this.setChats(chats);
    },(error) => {
      console.log(error);
    });
  }




  //this.http.request(new Request(options));
  /*
        console.log(headers.values());
        this.http.request('https://www.userlike.com/api/external/message/chat_meta/?count=2', options).subscribe(
            res => console.log(res.json()),
            msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        )

        /*
        this.http.get({url: 'https://www.userlike.com/api/external/message/chat_meta/?count=2', headers:{
            'Access-Control-Allow-Origin': 'http://localhost'}});*/

  //}
}
