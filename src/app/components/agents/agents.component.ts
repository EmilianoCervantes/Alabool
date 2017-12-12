import { Component, OnInit } from '@angular/core';

import { AgentService } from '../../services/agent.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
  providers: [AgentService]
})
export class AgentsComponent implements OnInit {

  constructor(private agentService: AgentService) { }

  ngOnInit() {
  }

}
