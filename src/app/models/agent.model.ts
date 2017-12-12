export class Agent {
    public id: number;
    public locale: string;
    public first_name: string;
    public email: string;
    public is_active: boolean;

    constructor(id: number, locale: string, name: string, email: string, is_active: boolean) {
        this.id = id;
        this.locale = locale;
        this.first_name = name;
        this.email = email;
        this.is_active = is_active;
    }
}