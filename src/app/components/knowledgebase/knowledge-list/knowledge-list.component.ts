import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Knowledge } from '../../../models/knowledge.model';
import { KnowledgebaseService } from '../../../services/knowledgebase.service';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.scss']
})
export class KnowledgeListComponent implements OnInit, OnDestroy {

    knowledges: Knowledge[];
    subcription: Subscription;

    constructor(private knowledgebaseService: KnowledgebaseService) { }

    ngOnInit() {
        this.subcription = this.knowledgebaseService.knowledgebaseChanged.subscribe((knowledges: Knowledge[]) => {
            this.knowledges = knowledges;
        });
        this.knowledgebaseService.getKnowledgebase();
    }

    ngOnDestroy() {
        this.subcription.unsubscribe();
    }

}
