import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { TicketService } from '../../../services/ticket.service';
import { TicketStorageService } from '../../../services/ticket-storage.service';

@Component({
    selector: 'app-ticket-edit',
    templateUrl: './ticket-edit.component.html',
    styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {
    id: number;
    editMode = false;
    ticketForm: FormGroup;

    constructor(private route: ActivatedRoute, private ticketService: TicketService,
                 private router: Router, private ticketStorageService: TicketStorageService) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            }
        );
    }

    onSubmit() {
        if (this.editMode) {
            this.ticketService.updateTicket(this.id, this.ticketForm.value);
            this.onViewTicket();
        } else {
            this.ticketService.addTicket(this.ticketForm.value);
            this.ticketForm.reset();
        }
        this.onSave(); // Hace una petición POST para ser almacenado.
    }

    onSave() {
        this.ticketStorageService.storageTickets()
            .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

    onViewTicket() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    onAddComment() {
        this.router.navigate(['../', 'comment'], { relativeTo: this.route });
    }

    onDeleteTicket() {
        this.ticketService.deleteTicket(this.id);
        this.router.navigate(['/tickets']);
    }

    private initForm() {
        let ticketTitle = '';
        let ticketDescription = '';
        let ticketCompany = '';
        let ticketStatus = '';
        let ticketPriority = '';
        let ticketBranch = '';
        let ticketClientName = '';
        let ticketClientEmail = '';
        let ticketClientPhone = '';
        let ticketResponsableName = '';

        if (this.editMode) {
            const ticket = this.ticketService.getTicket(this.id);
            ticketTitle = ticket.title;
            ticketDescription = ticket.description;
            ticketCompany = ticket.company;
            ticketStatus = ticket.status;
            ticketPriority = ticket.priority;
            ticketBranch = ticket.branch;
            ticketClientName = ticket.client_name;
            ticketClientEmail = ticket.client_email;
            ticketClientPhone = ticket.client_phone;
            ticketResponsableName = ticket.responsable_name;
        }

        this.ticketForm = new FormGroup({
            'title': new FormControl(ticketTitle, Validators.required),
            'description': new FormControl(ticketDescription, Validators.required),
            'company': new FormControl(ticketCompany, Validators.required),
            'status': new FormControl(ticketStatus, Validators.required),
            'priority': new FormControl(ticketPriority, Validators.required),
            'branch': new FormControl(ticketBranch),
            'client_name': new FormControl(ticketClientName, Validators.required),
            'client_email': new FormControl(ticketClientEmail, Validators.required),
            'client_phone': new FormControl(ticketClientPhone),
            'responsable_name': new FormControl(ticketResponsableName),
        });
    }
}