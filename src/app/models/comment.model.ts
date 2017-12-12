export class Comment {
    public name: string;
    public message: string;
    public created: string;

    constructor(name: string, message: string, created: string) {
        this.name = name;
        this.message = message;
        this.created = created;
    }
}