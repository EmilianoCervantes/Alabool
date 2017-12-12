import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { TicketService } from '../../../services/ticket.service';

@Component({
    selector: 'app-ticket-comment',
    templateUrl: './ticket-comment.component.html',
    styleUrls: ['./ticket-comment.component.scss']
})
export class TicketCommentComponent implements OnInit {
    id: number;
    commentForm: FormGroup;

    constructor(private ticketService: TicketService, private route: ActivatedRoute, private router: Router) { }
    ngOnInit() {
        this.route.params.subscribe( (params: Params) => {
            this.id = +params['id'];
            this.commentForm = new FormGroup({
                'message': new FormControl(null, Validators.required)
            });
        });
    }

    onViewTicket() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    onEditTicket() {
        this.router.navigate(['../', 'edit'], { relativeTo: this.route });
    }

    onDeleteTicket() {
        this.ticketService.deleteTicket(this.id);
        this.router.navigate(['/tickets']);
    }

    onSubmit() {
        this.ticketService.addComment(this.id, this.commentForm.value);
        this.onViewTicket();
    }
}
