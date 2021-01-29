import { Component } from '@angular/core';
import { Transaction } from './transaction.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pos-app';
  public trans: Transaction;

  transactions = []
  balance = 0;
  checkout =[]


  submit(event: any) {
    //this.member_ID = event.target.value
    var obj = new Transaction(Number(event.target.value),event.target.id)
    
    this.transactions.push(event.target.id)
    this.balance += Number(event.target.value)
    this.checkout.push(obj)



  }

   clear(){
     
    this.transactions = []
    this.balance = 0;
   }


}
