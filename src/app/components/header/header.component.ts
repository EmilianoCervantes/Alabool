import { Component } from '@angular/core';

import { TicketStorageService } from '../../services/ticket-storage.service';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private ticketStorageService: TicketStorageService, private authService: AuthService) { }

    onFetchData() {
        console.log('loa');
        this.ticketStorageService.getTickets();
    }

    onLogout(){
    	this.authService.logout();
    }

}
