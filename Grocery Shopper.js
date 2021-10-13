//groceryShopper assignment

var shopper = {
  freshFruit: "Watermelon",
  freshVegtables: "Broccoli",
  itemsInCart: 2,
  hasHealthlyFood: true, 
  displayInfo: function() {
    console.log( `${shopper.freshFruit} and ${this.freshVegtables} are in the grocery cart. How many items are in the cart?:  ${this.itemsInCart}` );
  },
  groceryCart: {
    snackFoods: ["chips",   "cookies",  "chocolate."]
  }
}


shopper.displayInfo();
console.log(shopper.groceryCart.snackFoods, "are also in the cart")