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

    getEntSpending() {
        function addFun(a,b) { return a + b;}
        const sum = this.entSpending.reduce(addFun);
        return sum;
    }
}

// Creating an object of new user
// userName = get from input 
let User = new spending("Ahmad");

// Getting the DOM Elements that will be used to add amount spent to our object. 
let add = document.getElementById("Add");
let selectItems = document.getElementById("category");
function getCategory() {
    let amountStr = document.getElementById("amount").value;
    let amount = Number(amountStr);
    let selectedItem = selectItems.options[selectItems.selectedIndex].value;
    if (selectedItem === 'food') {
        User.addFoodSpending(amount);
        console.log(User.foodSpending);
    } else if (selectedItem === 'bills') {
        User.addBillsSpending(amount);
        console.log(User.billsSpending);
    } else if (selectedItem === 'ent') {
        User.addEntSpending(amount);
        User.getEntSpending();
        console.log(User.getEntSpending());
    } else if (selectedItem === 'clothing') {
        User.addClothingSpending(amount);
        console.log(User.clothingSpending);
    }
}

// Adding an event Listener to trigger every time a user is adding new expense. 
add.addEventListener("click", getCategory, false);