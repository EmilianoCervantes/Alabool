import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketListComponent } from './components/tickets/ticket-list/ticket-list.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ChatListComponent } from './components/chats/chat-list/chat-list.component';
import { TicketDetailComponent } from './components/tickets/ticket-detail/ticket-detail.component';
import { TicketEditComponent } from './components/tickets/ticket-edit/ticket-edit.component';
import { TicketCommentComponent } from './components/tickets/ticket-comment/ticket-comment.component';
import { ChatDetailComponent } from './components/chats/chat-detail/chat-detail.component';
import { ChatGraphComponent } from './components/chats/chat-graph/chat-graph.component';
import { AgentsComponent } from './components/agents/agents.component';
import { AgentListComponent } from './components/agents/agent-list/agent-list.component';
import { AgentItemComponent } from './components/agents/agent-list/agent-item/agent-item.component';
import { AgentDetailComponent } from './components/agents/agent-detail/agent-detail.component';
import { AgentEditComponent } from './components/agents/agent-edit/agent-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StadisticsComponent } from './components/stadistics/stadistics.component';
import { KnowledgebaseComponent } from './components/knowledgebase/knowledgebase.component';
import { KnowledgeCreateComponent } from './components/knowledgebase/knowledge-create/knowledge-create.component';
import { KnowledgeEditComponent } from './components/knowledgebase/knowledge-edit/knowledge-edit.component';
import { KnowledgeListComponent } from './components/knowledgebase/knowledge-list/knowledge-list.component';
import { KnowledgeDetailComponent } from './components/knowledgebase/knowledge-detail/knowledge-detail.component';
import { ChatAgentComponent } from './components/stadistics/chat-agent/chat-agent.component';
import { AgentOnlineHoursComponent } from './components/stadistics/agent-online-hours/agent-online-hours.component';
import { AnnualCountComponent } from './components/stadistics/annual-count/annual-count.component';
import { WeekReviewComponent } from './components/stadistics/week-review/week-review.component';

import { TicketService } from './services/ticket.service';
import { TicketStorageService } from './services/ticket-storage.service';
import { ChatService } from './services/chat.service';
import { KnowledgebaseService } from './services/knowledgebase.service';

import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { ChatStorageService } from './services/chat-storage.service';
import { AgentService } from './services/agent.service';


@NgModule({
    declarations: [
        AppComponent,
        TicketsComponent,
        TicketListComponent,
        ChatsComponent,
        ChatListComponent,
        TicketDetailComponent,
        TicketEditComponent,
        TicketCommentComponent,
        ChatDetailComponent,
        AgentsComponent,
        AgentListComponent,
        AgentItemComponent,
        AgentDetailComponent,
        AgentEditComponent,
        HeaderComponent,
        DashboardComponent,
        StadisticsComponent,
        ChatAgentComponent,
        AgentOnlineHoursComponent,
        AnnualCountComponent,
        WeekReviewComponent,
        KnowledgebaseComponent,
        KnowledgeCreateComponent,
        KnowledgeEditComponent,
        KnowledgeListComponent,
        KnowledgeDetailComponent,
        SigninComponent,
        ChatGraphComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        HttpClientModule,
        ChartsModule,
        AppRoutingModule
    ],
    providers: [TicketService, TicketStorageService, ChatService, KnowledgebaseService,
                AuthService, AuthGuard, ChatStorageService, AgentService],
    bootstrap: [AppComponent]
})
export class AppModule { }