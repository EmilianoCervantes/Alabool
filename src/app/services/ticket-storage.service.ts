import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { TicketService } from './ticket.service';
import { Ticket } from '../models/ticket.model';

@Injectable()
export class TicketStorageService {

    constructor(private http: Http, private ticketService: TicketService) { }

    storageTickets() {
        return this.http.put('https://tickets-sac.firebaseio.com/tickets.json', this.ticketService.getTickets());
    }

    storeTicket(tickets: any[]) {
        return this.http.post('https://tickets-sac.firebaseio.com/tickets.json', tickets);
    }

    getTickets() {
        let headers = new Headers();
        headers.append('ContentType', 'application/json');
        let opts = new RequestOptions();
        opts.headers = headers;
        this.http.get('https://tickets-sac.firebaseio.com/tickets.json', opts)
            .subscribe((response: Response) => {
            const tickets: Ticket[] = response.json();
            this.ticketService.setTickets(tickets);
        });
    }
}