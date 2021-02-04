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
  
    var obj = new Transaction(Number(event.target.value),event.target.id)
    
    this.balance += Number(event.target.value)
    obj.occurence +=1;
    

    if(this.duplicate(obj.name) == false){
      this.checkout.push(obj)
    }
    else{
      let replacement = this.grab(obj.name);
      this.checkout.splice(this.checkout.indexOf(obj),1)
      replacement.occurence +=1;
      replacement.price += obj.price;
      this.checkout.push(replacement)
      
    }
    console.log(obj.price)
    console.log(obj.occurence)
  
  }


  duplicate(name:String){

    for(let i=0; i < this.checkout.length; i++){

      if(this.checkout[i].name == name){
        return true
      }
    }
      return false;
  }

  grab(name:String){

    for(let i=0; i < this.checkout.length; i++){

      if(this.checkout[i].name == name){
        return this.checkout[i]
      }
    }
      return false;
  }



   clear(){
     
    this.checkout = []
    //this.transactions = []
    this.balance = 0;
   }


}
