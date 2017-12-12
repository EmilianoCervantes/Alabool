import { Subject } from 'rxjs/Subject';

import { Ticket } from '../models/ticket.model';
import { Comment } from '../models/comment.model';

export class TicketService {
    index: number;
    ticketChanged = new Subject<Ticket[]>();

    private tickets: Ticket[];

    getTickets() {
        return this.tickets.slice();
    }

    getTicket(id: number) {
        for (this.index = 0; this.index < this.tickets.length; this.index++) {
            if (id === this.tickets[this.index].id) {
                return this.tickets[this.index];
            }
        }
    }

    setTickets(tickets: Ticket[]) {
        this.tickets = tickets;
        this.ticketChanged.next(this.tickets.slice());
    }

    addTicket(ticket: Ticket) {
        ticket.id = this.tickets.length;
        ticket.created = Date.now();
        ticket.comments = [];
        this.tickets.push(ticket);
        this.ticketChanged.next(this.tickets.slice());
    }

    updateTicket(id: number, newTicket: Ticket) {
        for (this.index = 0; this.index < this.tickets.length; this.index++) {
            if (id === this.tickets[this.index].id) {
                newTicket.id = id;
                newTicket.created = Date.now();
                newTicket.comments = this.tickets[this.index].comments;
                this.tickets[this.index] = newTicket;
                this.ticketChanged.next(this.tickets.slice());
            }
        }
    }

    addComment(id: number, comment: Comment) {
        comment.created = '23/10/2017';
        comment.name = 'Lucero Áviles';
        for (this.index = 0; this.index < this.tickets.length; this.index++) {
            if (id === this.tickets[this.index].id) {
                this.tickets[this.index].comments.push(comment);
                this.ticketChanged.next(this.tickets.slice());
            }
        }
    }

    deleteTicket(id: number) {
        for (this.index = 0; this.index < this.tickets.length; this.index++) {
            if (id === this.tickets[this.index].id) {
                this.tickets.splice(this.index, 1);
                this.ticketChanged.next(this.tickets.slice());
            }
        }
    }
}