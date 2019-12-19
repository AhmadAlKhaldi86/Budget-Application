function setBudget() {
let weeklyBudget = prompt("Enter your weekly budget", 0);
document.querySelector("span").textContent += weeklyBudget;
}

function main() {
    let g = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("h1")[0].textContent += g;
}

let d = new Date();
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let n = weekday[d.getDay()];
if (n === weekday[4]) {
    setBudget();
}



// This Class is used to create a template for the user expenses 
class spending {
    constructor() {
        this.entSpending =  [];
        this.foodSpending =  [];
        this.billsSpending =  [];
        this.clothingSpending =  [];
      }
    addEntSpending(amount) {
        this.entSpending.push(amount);
    }

    addFoodSpending(amount) {
        this.foodSpending.push(amount);
    }

    addBillsSpending(amount) {
        this.billsSpending.push(amount);
    }

    addClothingSpending(amount) {
        this.clothingSpending.push(amount);
    }

    getSpending(selectedItem) {
        function addFun(a,b) { return a + b;}
        let sum;
        switch (selectedItem) {
            case 'ent':
                sum = this.entSpending.reduce(addFun,0);
                return sum;
                break;
            case 'clothing':
                sum = this.clothingSpending.reduce(addFun,0);
                return sum;
                break;
            case 'bills':
                sum = this.billsSpending.reduce(addFun,0);
                return sum;
                break;
            case 'food':
                sum = this.foodSpending.reduce(addFun,0);
                return sum;
                break;
        }
    }
    getTotalSpending() {
        let budget = 500;
        let totalSpending = this.getSpending('ent') + this.getSpending('clothing') + this.getSpending('bills') + this.getSpending('food');
        let amountLeft = budget - totalSpending;
        console.log("totalSpending :" +  totalSpending);
        console.log("amountLeft :" +  amountLeft);
        return totalSpending, amountLeft
    }
}


//----------------- Global Variables --------------------// 
// Creating an object of new user
// userName = get from input 
let User = new spending("Ahmad");
// add below is the button that submits new expense  
let add = document.getElementById("Add");
// selectItems is the dropDown that selects the category item
let selectItems = document.getElementById("category");



//-------------------- Main Function ------------------------// 
// This Function will check "Category" + added Amount
// Use them to add the amount entered in the respected category
function main() {
    // amount variable will store the amount entered as an expense 
    let amountStr = document.getElementById("amount").value;
    let amount = Number(amountStr);

    // selectedItem will store the category  entered with expense. 
    let selectedItem = selectItems.options[selectItems.selectedIndex].value;

    // If the amount entered is less than 1 or not a number it will not add or get the total.
    // Below conditional statement will check category then adds the amount expensed in in respected category
    // Also Once a new amount is added in respected category below will return new total of same respected category
    if (amount < 1 || isNaN(amount)) {
        console.log("Try again!");
    } else if (selectedItem === 'food') {
        User.addFoodSpending(amount);
        User.getSpending(selectedItem);
        console.log(selectedItem + "Spending: " + User.getSpending(selectedItem));
        User.getTotalSpending();
    } else if (selectedItem === 'bills') {
        User.addBillsSpending(amount);
        User.getSpending(selectedItem);
        console.log(selectedItem + "Spending: " + User.getSpending(selectedItem));
        User.getTotalSpending();
    } else if (selectedItem === 'ent') {
        User.addEntSpending(amount);
        User.getSpending(selectedItem);
        console.log(selectedItem + "Spending: " + User.getSpending(selectedItem));
        User.getTotalSpending();
    } else if (selectedItem === 'clothing') {
        User.addClothingSpending(amount);
        User.getSpending(selectedItem);
        console.log(selectedItem + "Spending: " + User.getSpending(selectedItem));
        User.getTotalSpending();
    }
}

// Adding an event Listener to trigger every time a user is adding new expense. 
add.addEventListener("click", main, false);
