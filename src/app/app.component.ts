import { Component } from '@angular/core';
import { Item } from './item.model';
import { Transaction } from './transaction.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pos-app';
  public trans: Transaction;
  closeResult = '';
  transactions = []
  cat_name = 'EarthFoods Signature Dishes';
  balance = 0;
  checkout = []
  button_color = "btn-success"
  test = 'pizza'
  
  z  = ([[1 , true], [2 ,false ] ,[4, true]]); 



  main = [

    new Item(9, "Quinoa Enchilada Bake"),
    new Item(8, "Parmesan and Spinach Orzo"),
    new Item(11, "Herbed Cranberry Chicken"),
    new Item(9, "French Onion Chicken"),
    new Item(5.5, "Mini Buffalo Chicken Crunchwraps"),
    new Item(5, "Cold Spicy Peanut Sesame Noodles"),
    new Item(11, "Cajun Chicken Pasta"),
    new Item(4.5, "Basil Beef Stir Fry"),
    new Item(9, "Drunken Noodles with Tofu"),
    new Item(7, "Korean Beef"),
    new Item(9, "Honey Jalapeno Grilled Chicken Drumsticks"),
    new Item(8.25, "Bangin’ Mac and Cheese"),
    new Item(7.5, "Bulgogi Kimchi Burger"),
    new Item(12.75, "Eggplant Parmesan Sandwich"),
    new Item(12, "Creamy Steak Fettuccine"),
    new Item(13.25, "Reverse Sear Steak"),
    new Item(10.25, "Juicy Steak-and-Tomato Salad"),
    new Item(9.5, "Pan-Roasted Salmon Salad"),
  ]
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
  pizza = [

    new Item(9, "Cheese Pizza"),
    new Item(8, "Pepperoni Pizza"),
    new Item(11, "Margarita Pizza"),
    new Item(9, "Veggie Pizza"),
    new Item(5.5, "Super Pizza"),
    new Item(5, "Meatball Pizza"),
    new Item(11, "Meat Lovers Pizza"),
    new Item(4.5, "Detroit Style Delux"),
   
  ]

  lunch = [

    new Item(9, "Whiskey Chicken Sandwich"),
    new Item(8, "Bacon Ranch Chicken Sandwich"),
    new Item(11, "Southern Fried Chicken Sandwich"),
    new Item(9, "Philly Cheesesteak Burger"),
    new Item(5.5, "Bacon Cheese Burger"),
    new Item(5, "Chicken Fingers"),
    new Item(11, "Flatbread Pizza"),
    new Item(4.5, "BBQ Wing Platter"),
    new Item(9, "Shrimp Tacos"),
    new Item(7, "Seafood Salad"),

  ]

  drinks = [

    new Item(9, "Water"),
    new Item(8, "Chocolate Milk"),
    new Item(8, "Milk"),
    new Item(11, "Coffee"),
    new Item(9, "Caramel Latte"),
    new Item(5.5, "Coke"),
    new Item(5, "Sprite"),
    new Item(11, "Dr. Pepper"),
    new Item(4.5, "Lemonade"),
    new Item(9, "Pink Lemonade"),
    new Item(7, "Orange Soda"),
    new Item(9, "Apple Juice"),
    new Item(8.25, "Orange Juice"),
    new Item(7.5, "Cranberry Juice"),
    new Item(12.75, "Gatorade"),
    new Item(12, "Mountain Dew"),
  ]

  dessert = [

    new Item(9, "Cheesecake"),
    new Item(8, "Apple Pie"),
    new Item(11, "Tiramisu"),
    new Item(9, "Banana Pudding"),
    new Item(5.5, "Ice Cream"),
    new Item(5, "Carrot Cake"),
    new Item(11, "Boston Cream Pie"),
    new Item(4.5, "Rose Cookies"),
  
  ] 
  beer = [

    new Item(9, "Budweiser"),
    new Item(8, "Bud Light"),
    new Item(11, "Guiness"),
    new Item(9, "Blue Moon"),
    new Item(5.5, "Corona"),
    new Item(5, "Bell's Two Hearted Ale"),
    new Item(11, "Dogfish Head 60 Minute"),
    new Item(4.5, "Stone IPA"),
    new Item(9, "Long Island Ice Tea"),
    new Item(7, "Cosmopolitan"),
    new Item(9, "Pina Colada"),
    new Item(8, "Old Fashioned"),
    new Item(11, "Moscow Mule"),
    new Item(9, "Bloody Mary"),
    new Item(5.5, "Whiskey Sour"),
    new Item(5, "Margarita"),
    new Item(11, "Cabernet Sauvignon"),
    new Item(4.5, "Zinfandel"),
    new Item(9, "Pinot Noir"),
    new Item(7, "Chardonnay"),
    new Item(4.5, "Riesling"),
    new Item(9, "Merlot"),
    

  ] 

  catergory = this.main
  font_color = "font-1"
  breakdown;

  constructor(private modalService: NgbModal,) {

    
  }

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

 

  catergories(event: String) {
    console.log(event)
    switch (event) {
      case "mains":
        this.catergory = this.main;
        this.cat_name = 'EarthFoods Signature Dishes'
        this.button_color = "btn-success"
        this.font_color = "font-1"
        break;
      case "breakfast":
        this.catergory = this.breakfast;
        this.cat_name = 'Breakfast Menu'
        this.button_color = "btn-warning"
        this.font_color = "font-2"
        break;
      case "soups":
        this.catergory = this.soups;
        this.cat_name = 'Soups'
        this.button_color = "btn-info"
        this.font_color = "font-3"
        break;
      case "pizza":
        this.catergory = this.pizza;
        this.cat_name = 'Pizza'
        this.button_color = "btn-danger"
        this.font_color = "font-4"
        break;
      case "lunch":
        this.catergory = this.lunch;
        this.cat_name = 'Lunch Menu'
        this.button_color = "btn-primary"
        this.font_color = "font-5"
        break;
      case "drinks":
        this.catergory = this.drinks;
        this.cat_name = 'Soft Drinks'
        this.button_color = "btn-secondary"
        this.font_color = "font-6"
        break;
      case "desert":
        this.catergory = this.dessert;
        this.cat_name = 'Desserts'
        this.button_color = "btn-danger"
        this.font_color = "font-4"
        break;
      case "beer":
        this.catergory = this.beer;
        this.cat_name = 'Beer Wine and Spirits'
        this.button_color = "btn-light"
        this.font_color = "font-7"
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

  remove(name: String) {

    console.log(name)
    for (let i = 0; i < this.checkout.length; i++) {

      if (this.checkout[i].name == name) {
        this.balance -= this.checkout[i].price
        this.checkout.splice(i,1);
       
      }
    }
    return false;
  }


    clear(){

      this.checkout = []
      //this.transactions = []
      this.balance = 0;
    }

    open(content, item:String) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });

     this.breakdown =item

    }

   

    private getDismissReason(reason: any): string {

      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }


    removeItem(item:String){

    }


  }
