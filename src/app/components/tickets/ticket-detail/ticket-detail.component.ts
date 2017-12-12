import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Ticket } from '../../../models/ticket.model';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket;
  id: number;

  constructor(private ticketService: TicketService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.ticket = this.ticketService.getTicket(this.id);
      }
    );
  }

  onEditTicket() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onAddComment() {
    this.router.navigate(['comment'], { relativeTo: this.route });
  }

  onDeleteTicket() {
    this.ticketService.deleteTicket(this.id);
    this.router.navigate(['/tickets']);
  }
}