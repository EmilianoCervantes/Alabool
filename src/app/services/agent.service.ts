import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { Agent } from '../models/agent.model';

@Injectable()
export class AgentService {

  index: number;
  private agents: Agent[];
  agentChanged = new Subject<Agent[]>();
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private http: Http, private jsonp: Jsonp) { }

  getAgent(id: number) {
    for (this.index = 0; this.index < this.agents.length; this.index++) {
      if (id === this.agents[this.index].id) {
        return this.agents[this.index];
      }
    }
  }

  setAgents(agents: Agent[]) {
    this.agents = agents;
    this.agentChanged.next(this.agents.slice());
  }
  
  getAgents() {
    const headers = new Headers();

    this.http.get('http://localhost:3000/api/Agentes/Configuration').subscribe((data) => {
      console.log(data.json());
      const agents: Agent[] = data.json();
      this.setAgents(agents);
    },(error) => {
      console.log(error);
    });
  }
}
