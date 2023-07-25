export class Book {
    id: string;
    name: string;
    price: number;
    des: string;

    constructor(private idd:string, private namee:string, private pricee:number, private dess: string) {
        this.id= idd;
        this.name=namee;
        this.price=pricee;
        this.des = dess;
    }
}