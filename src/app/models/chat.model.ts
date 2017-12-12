export class Chat {
    public id: number;
    public loc_city: string;
    public client_name: string;
    public agent: string;
    public created: string;

    constructor(id: number, loc_city: string, client_name: string) {
        this.id = id;
        this.loc_city = loc_city;
        this.client_name = client_name;
    }
}