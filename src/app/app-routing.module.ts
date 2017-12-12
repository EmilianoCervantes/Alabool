import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketEditComponent } from './components/tickets/ticket-edit/ticket-edit.component';
import { TicketCommentComponent } from './components/tickets/ticket-comment/ticket-comment.component';
import { TicketDetailComponent } from './components/tickets/ticket-detail/ticket-detail.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ChatDetailComponent } from './components/chats/chat-detail/chat-detail.component';
import { ChatGraphComponent } from './components/chats/chat-graph/chat-graph.component';
import { AgentsComponent } from './components/agents/agents.component';
import { StadisticsComponent } from './components/stadistics/stadistics.component';
import { KnowledgebaseComponent } from './components/knowledgebase/knowledgebase.component';
import { KnowledgeCreateComponent } from './components/knowledgebase/knowledge-create/knowledge-create.component';
import { KnowledgeDetailComponent } from './components/knowledgebase/knowledge-detail/knowledge-detail.component';
import { KnowledgeEditComponent } from './components/knowledgebase/knowledge-edit/knowledge-edit.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'tickets', component: TicketsComponent, canActivate: [AuthGuard], children: [
        { path: '', component: TicketEditComponent },
        { path: ':id', component: TicketDetailComponent, canActivate: [AuthGuard] },
        { path: ':id/edit', component: TicketEditComponent, canActivate: [AuthGuard] },
        { path: ':id/comment', component: TicketCommentComponent, canActivate: [AuthGuard] }
    ]},
    { path: 'tickets-stadistics', component: StadisticsComponent, canActivate: [AuthGuard] },
    { path: 'chats', component: ChatsComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ChatGraphComponent },
        { path: ':id', component: ChatDetailComponent, canActivate: [AuthGuard] },
        { path: ':id/graph', component: ChatGraphComponent, canActivate: [AuthGuard] }
    ]},
    { path: 'agents', component: AgentsComponent, canActivate: [AuthGuard] },
    { path: 'knowledgebase', component: KnowledgebaseComponent, canActivate: [AuthGuard], children: [
        { path: '', component: KnowledgeCreateComponent },
        { path: ':id', component: KnowledgeDetailComponent, canActivate: [AuthGuard] },
        { path: ':id/edit', component: KnowledgeEditComponent, canActivate: [AuthGuard] }
    ] },
    { path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
