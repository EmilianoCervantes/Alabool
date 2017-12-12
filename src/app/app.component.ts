import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    loadedTab = 'tickets';

    ngOnInit(){
    	firebase.initializeApp({
    		apiKey: "AIzaSyBlTud2yGZ3A6bl8qSr5TL5AuDUUEn4TAk",
		    authDomain: "web-sac.firebaseapp.com"
    	});
    }

    onNavigation(tab: string) {
        this.loadedTab = tab;
    }
}
