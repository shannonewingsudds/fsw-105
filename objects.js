//Write a program that has a shopper object. Include at least one property with each of the following data types as values to the properties:
//String, number, boolen, function
//In addition, you should add a groceryCart property to your object, which should be an Array of items that can commonly
//be found in a grocery cart
var shopper = {
    fruit: "Watermelon",
    vegtable: "Broccoli",
    items: "5",
    shoppingCart: function() {
        return this.items + " " + this.fruit + " " + this.vegtable;
    }
};