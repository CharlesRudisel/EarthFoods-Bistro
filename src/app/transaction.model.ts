export class Transaction {

    price: number;
    name: string;
    occurence: number = 0;


    constructor(price:number ,name: string) {
        this.price = price;
        this.name = name;
      }

}
