import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pos-app';

  transactions = []
  balance = 0;


  submit(event: any) {
    //this.member_ID = event.target.value
    this.transactions.push(event.target.value)
    this.balance += Number(event.target.value)

  }

   clear(){
     
    this.transactions = []
    this.balance = 0;
   }


}
