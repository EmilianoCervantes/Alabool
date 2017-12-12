import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Agent } from '../../../models/agent.model';
import { AgentService } from '../../../services/agent.service';

@Component({
    selector: 'app-agent-detail',
  	templateUrl: './agent-detail.component.html',
  	styleUrls: ['./agent-detail.component.scss']
})
export class AgentDetailComponent implements OnInit {
    agent: Agent;
    id: number;

    constructor(private agentService: AgentService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.agent = this.agentService.getAgent(this.id);
        });
    }

    onEditAgent() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
}