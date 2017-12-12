export class Knowledge {
    public id: string;
    public title: string;
    //public origin: string;
    public description: string;
    public solution: string;
    public date: string;

    constructor(id: string, title: string, description: string, solution: string) {
        this.id = id;
        this.title = title;
        //this.origin = origin;
        this.description = description;
        this.solution = solution;
        this.date = '17/11/2017';
    }
}