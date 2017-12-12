import { Component, OnInit } from '@angular/core';

import { Ticket } from '../../models/ticket.model';
import { Comment } from '../../models/comment.model';
import { TicketService } from '../../services/ticket.service';
import { TicketStorageService } from '../../services/ticket-storage.service';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

    constructor(private ticketStorageService: TicketStorageService, private ticketService: TicketService) { }

    ngOnInit() { }
    
    
    private tickets: Ticket[] = [
        new Ticket(265, 'Problema 1', 'Rolcar', [
            new Comment('Miguel Zavala', 'Borrar las cookies.', '18/10/2107'),
            new Comment ('Miguel Zavala', 'Reiniciar navegador', '18/10/2107')
        ]),
        new Ticket(266, 'Problema 2', 'Rexfarma', [
            new Comment('Geovanni Arrieta', 'Proporcionar un nuevo email.', '18/10/2107')
        ]),
        new Ticket(267, 'Problema 3', 'Rolcar', []),
        new Ticket(268, 'Problema 4', 'Psicofarma', [
            new Comment('Miguel Zavala', 'Se necesita el nombre completo de la empresa.', '18/10/2107'),
            new Comment('Geovanni Arrieta', 'Falta confirmacion del email.', '18/10/2107'),
            new Comment('Jimena Cortés', 'Reenvío de la confirmacion al mail.', '18/10/2107')
        ])
    ];
    
    getNew(){
        this.ticketService.setTickets(this.tickets);
        console.log('hola');
    }

}
