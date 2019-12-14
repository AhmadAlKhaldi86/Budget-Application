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

    getSpending(expense) {
        function addFun(a,b) { return a + b;}
        let sum;
        switch (expense) {
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
let User = new spending("Ahmad");

// add below is the button that submits new expense  
let add = document.getElementById("Add");
// selectItems is the dropDown that selects the category item
let selectItems = document.getElementById("category");




// This Function will check "Category" + added Amount
// Use them to add the amount entered in the respected category
function getCategory() {
    // amount variable will store the amount entered as an expense 
    let amountStr = document.getElementById("amount").value;
    let amount = Number(amountStr);

    // selectedItem will store the category  entered with expense. 
    let selectedItem = selectItems.options[selectItems.selectedIndex].value;

    // Below conditional statement will check category then adds the amount expensed in in respected category
    // Also Once a new amount is added in respected category below will return new total of same respected category
    if (selectedItem === 'food') {
        expense = 'food';
        User.addFoodSpending(amount);
        User.getSpending(expense);
        console.log(User.getSpending(expense));
    } else if (selectedItem === 'bills') {
        expense = 'bills';
        User.addBillsSpending(amount);
        User.getSpending(expense);
        console.log(User.getSpending(expense));
    } else if (selectedItem === 'ent') {
        expense = 'ent';
        User.addEntSpending(amount);
        User.getSpending(expense);
        console.log(User.getSpending(expense));
    } else if (selectedItem === 'clothing') {
        expense = 'clothing';
        User.addClothingSpending(amount);
        User.getSpending(expense);
        console.log(User.getSpending(expense));
    }
}

// Adding an event Listener to trigger every time a user is adding new expense. 
add.addEventListener("click", getCategory, false);