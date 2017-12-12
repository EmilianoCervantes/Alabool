import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, ResponseContentType } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from '@angular/common/http';

import { Knowledge } from '../models/knowledge.model';

@Injectable()
export class KnowledgebaseService {
    private knowledges: Knowledge[];
    knowledgebaseChanged = new Subject<Knowledge[]>();

    /*
    private chats: Chat [] = [
        new Chat(234, 'Rolcar', 'Gerardo Ruiz', 'Geovanni Arrieta', '18-10-2017'),
        new Chat(235, 'Psicofarma', 'Carlos Toledo', 'Jimena Cortés', '18-10-2017'),
        new Chat(236, 'Rolcar', 'Miguel Cortines', 'Geovanni Arrieta', '18-10-2017'),
        new Chat(237, 'Alambrados', 'Francisco Morales', 'Miguel Zavala', '18-10-2017'),
        new Chat(238, 'Alabool', 'José Ventura', 'Geovanni Arrieta', '18-10-2017'),
    ];*/

    constructor(private http: Http) { }

    /*
    getChats() {
        return this.chats.slice();
    }*/

    getKnowledge(id: string) {
      let index;
        for (index = 0; index < this.knowledges.length; index++) {
            if (id === this.knowledges[index].id) {
                return this.knowledges[index];
            }
        }
    }

    setKnowledgebase(knowledges: Knowledge[]) {
        this.knowledges = knowledges;
        this.knowledgebaseChanged.next(this.knowledges.slice());
    }

    addKnowledge(knowledge: Knowledge) {
        knowledge.date = '21/10/2017';
        const headers = new Headers();
        headers.append('Authorization', 'lkNrroW7nDR6lttEcSgMEEG9Fgr7J9YKJsDbBwyULdqyH4YcwCDphAv2gR52Fj13');
        headers.append('Content-Type', 'application/json');

        const opts = new RequestOptions();
        opts.headers = headers;
        this.http.post('http://localhost:3000/api/Solutions', knowledge, opts)
            .subscribe((data) => {
            console.log(data.json());
        },
        (error) => {
            console.log(error);
        });
        this.knowledges.push(knowledge);   //esto se podría necesitar para mostrar en la lista al momento de crearse
        this.knowledgebaseChanged.next(this.knowledges.slice());
    }

    getKnowledgebase() {
        const headers = new Headers();
        headers.append('Authorization', 'lkNrroW7nDR6lttEcSgMEEG9Fgr7J9YKJsDbBwyULdqyH4YcwCDphAv2gR52Fj13');
        headers.append('Content-Type', 'application/json');

        const opts = new RequestOptions();
        opts.headers = headers;

        this.http.get('http://localhost:3000/api/Solutions', opts).subscribe((response: Response) => {
            const knowledges: Knowledge[] = response.json();
            this.setKnowledgebase(knowledges);
        },
        (error) => {
            console.log(error);
        });

    }
}
