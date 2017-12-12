import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ticket } from '../../../models/ticket.model';
import { TicketService } from '../../../services/ticket.service';
import { TicketStorageService } from '../../../services/ticket-storage.service';

@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit, OnDestroy {
    tickets: Ticket[];
    subcription: Subscription;

    constructor(private ticketService: TicketService, private ticketStorageService: TicketStorageService) { }

    ngOnInit() {
        this.subcription = this.ticketService.ticketChanged.subscribe((tickets: Ticket[]) => {
            this.tickets = tickets;
        });
        //this.tickets = this.ticketService.getTickets();
        this.ticketStorageService.getTickets();
    }

    ngOnDestroy() {
        this.subcription.unsubscribe();
    }
}
