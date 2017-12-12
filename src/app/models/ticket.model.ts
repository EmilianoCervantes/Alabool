import { Comment } from '../models/comment.model';

export class Ticket {
    public id: number;
    public title: string;
    public description: string;
    public status: string;
    public priority: string;
    public created: number;
    public closed: string;
    public products: string[];
    public company: string;
    public branch: string;
    public client_name: string;
    public client_email: string;
    public client_phone: string;
    public responsable_name: string;
    public responsable_email: string;
    public comments: Comment[];
    public files: string [];
    public origin: string;

    constructor(id: number, title: string, company: string, comments: Comment[]) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.comments = comments;
        this.created = Date.now();
    }
}