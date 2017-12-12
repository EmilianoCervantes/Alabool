import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Agent } from '../../../models/agent.model';
import { AgentService } from '../../../services/agent.service';


@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {
	agents: Agent[];
	subscription: Subscription;

  constructor(private agentService: AgentService) { }

  ngOnInit() {
  	this.subscription = this.agentService.agentChanged.subscribe(
  			(agents: Agent[]) => {
  				this.agents = agents;
  			}
  		);
  	this.agentService.getAgents();
  }
}