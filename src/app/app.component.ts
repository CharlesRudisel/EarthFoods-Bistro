import { Component } from '@angular/core';
import { Item } from './item.model';
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
  checkout = []
  catergory = []
  breakfast = [

    new Item(9, "French Toast"),
    new Item(8, "Huevos Rancheros"),
    new Item(11, "Brisket Breakfast"),
    new Item(9, "Southwest Tofu Scramble"),
    new Item(5.5, "Buttermilk Pancakes"),
    new Item(5, "Buscuits and Gravy"),
    new Item(11, "Fish and Grits"),
    new Item(4.5, "Granola Oatmeal"),
    new Item(9, "Bluebird Burrito"),
    new Item(7, "Bionic Breakfast"),
    new Item(9, "Early Bird Special"),
    new Item(8.25, "Today's Omelette"),
    new Item(7.5, "Floridan French Toast"),
    new Item(12.75, "Full English Breakfast"),
    new Item(12, "Lemon Riccotta French Toast"),
    new Item(13.25, "Smoked Salmon Omelette"),
    new Item(10.25, "The All-American Breakfast"),
    new Item(9.5, "Breakfast Bowl"),
  ]

  soups = [

    new Item(9, "Tomato Basil Soup"),
    new Item(8, "Potato & Cheese Soup"),
    new Item(11, "Asian Chili"),
    new Item(9, "Bacon Corn Chowder"),
    new Item(5.5, "Creamy Chicken Enchilada Soup"),
    new Item(5, "Loaded Baked Potato Soup"),
    new Item(11, "Manhattan Clam Chowder"),
    new Item(4.5, "Minestrone"),
    new Item(9, "Zesty Tomato Cheese Soup"),
    new Item(7, "lobster bisque"),

  ]


  submit(event: any) {

    //console.log(event.target.value)
    //console.log(event.target.id)
    var obj = new Transaction(Number(event.target.value), event.target.id)

    this.balance += Number(event.target.value)
    obj.occurence += 1;


    //If item is new push to the transaction list
    if (this.duplicate(obj.name) == false) {
      this.checkout.push(obj)
    }
    else {

      // Grabs the instance of the transaction
      this.update(obj.name, obj.price);



    }
    console.log(this.checkout.length)


  }

  catergories(event: any) {
    switch (event.target.value) {
      case "mains":
        this.catergory = this.soups;
        break;
      case "breakfast":
        this.catergory = this.breakfast;
        break;
      case "soups":
        this.catergory = this.soups;
        break;
      case "mains":
        this.catergory = this.soups;
        break;
      case "mains":
        this.catergory = this.soups;
        break;
      case "mains":
        this.catergory = this.soups;
        break;
      case "mains":
        this.catergory = this.soups;
        break;
      case "mains":
        this.catergory = this.soups;
        break;
    }

  }

  duplicate(name: String) {

    for (let i = 0; i < this.checkout.length; i++) {

      if (this.checkout[i].name == name) {
        return true
      }
    }
    return false;
  }

  update(name: String, newPrice: Number) {

    for (let i = 0; i < this.checkout.length; i++) {

      if (this.checkout[i].name == name) {
        this.checkout[i].occurence += 1;
        this.checkout[i].price += newPrice;
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
