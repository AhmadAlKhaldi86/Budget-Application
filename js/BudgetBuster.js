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
    constructor(userName) {
        this.entSpending =  [];
        this.foodSpending =  [];
        this.billsSpending =  [];
        this.clothingSpending =  [];
        this.userName = userName;
      }

    getUser(userName) {
        return userName;
        console.log(userName);
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
                sum = this.entSpending.reduce(addFun);
                return sum;
                break;
            case 'clothing':
                sum = this.clothingSpending.reduce(addFun);
                return sum;
                break;
            case 'bills':
                sum = this.billsSpending.reduce(addFun);
                return sum;
                break;
            case 'food':
                sum = this.foodSpending.reduce(addFun);
                return sum;
                break;
        }
    }
}

// Creating an object of new user
// userName = get from input 

// updating the name on the document
let nameInput = document.getElementById("name");
   let nameChange = nameInput.value;
   document.querySelector("h1").textContent = `Hello ${nameChange}`;

let user = new spending(nameChange);
// add below is the button that submits new expense  
let add = document.getElementById("Add");

// selectItems is the dropDown that selects the category item
let selectItems = document.getElementById("category");


// This Function will check "Category" + added Amount
// Use them to add the amount entered in the respected category
let formElement = document.querySelector("form");
function getCategory() {
    // amount variable will store the amount entered as an expense 
    let amountStr = document.getElementById("amount").value;
    let amount = Number(amountStr);

    // selectedItem will store the category  entered with expense. 
    let selectedItem = selectItems.options[selectItems.selectedIndex].value;

    // If the amount entered is less than 1 or not a number it will not add or get the total.
    // Below conditional statement will check category then adds the amount expensed in in respected category
    // Also Once a new amount is added in respected category below will return new total of same respected category
    if (amount < 1 || isNaN(amount)) {
        console.log("What the hell");
    } else if (selectedItem === 'food') {
        user.addFoodSpending(amount);
        user.getSpending(selectedItem);
        console.log(user.getSpending(selectedItem));
        
    } else if (selectedItem === 'bills') {
        user.addBillsSpending(amount);
        user.getSpending(selectedItem);
        console.log(user.getSpending(selectedItem));
    } else if (selectedItem === 'ent') {
        user.addEntSpending(amount);
        user.getSpending(selectedItem);
        console.log(user.getSpending(selectedItem));
    } else if (selectedItem === 'clothing') {
        user.addClothingSpending(amount);
        user.getSpending(selectedItem);
        console.log(user.getSpending(selectedItem));  
    }
}

// Adding an event Listener to trigger every time a user is adding new expense. 
add.addEventListener("click", getCategory, false);