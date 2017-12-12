import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Knowledge } from '../../../models/knowledge.model';
import { KnowledgebaseService } from '../../../services/knowledgebase.service';

@Component({
  selector: 'app-knowledge-detail',
  templateUrl: './knowledge-detail.component.html',
  styleUrls: ['./knowledge-detail.component.scss']
})
export class KnowledgeDetailComponent implements OnInit {
  knowledge: Knowledge;
  id: string;

  constructor(private knowledgebaseService: KnowledgebaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = ""+params['id'];
        this.knowledge = this.knowledgebaseService.getKnowledge(this.id);
      }
    );
  }

}
