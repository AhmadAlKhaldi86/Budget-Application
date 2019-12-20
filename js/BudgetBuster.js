// This Class is used to create a template for the user expenses for each category 
// This class will also calculate the total expense and amount left in weekly budget. 

class spending {
    constructor() {
        this.entSpending =  []; //empty array to place entertainment spending
        this.foodSpending =  []; //empty array to place food spending
        this.billsSpending =  []; //empty array to place bills spending
        this.clothingSpending =  []; //empty array to place clothing spending
      }
      //methods to add spending for each amount and add it to assigned empty array
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

    // function to return sum of chosen category
    getSpending(selectedItem) {
        function addFun(a,b) { return a + b;}
        let sum;
        switch (selectedItem) {
            case 'ent':
                let entEl = document.getElementById("entertainment");
                sum = this.entSpending.reduce(addFun,0);
                entEl.textContent = `$${sum}`;
                return sum;
                break;
            case 'clothing':
                let clothingEl = document.getElementById("clothing");
                sum = this.clothingSpending.reduce(addFun,0);
                clothingEl.textContent = `$${sum}`;
                return sum;
                break;
            case 'bills':
                let billsEl = document.getElementById("bills");
                sum = this.billsSpending.reduce(addFun,0);
                billsEl.textContent = `$${sum}`;
                return sum;
                break;
            case 'food':
                let foodEl = document.getElementById("food");
                sum = this.foodSpending.reduce(addFun,0);
                foodEl.textContent = `$${sum}`;
                return sum;
                break;
        }
    }
    //method to get total for amount spent 
    getTotalSpending() {
        let totalEl = document.getElementById("expense-amount");
        let totalSpending = this.getSpending('ent') + this.getSpending('clothing') + this.getSpending('bills') + this.getSpending('food');
        totalEl.textContent = totalSpending;
        return totalSpending;
    }
    // method to take weekly budget minus spending and get what is left in the budget
    getAmountLeft() {
        let budget = document.getElementById("weeklyBudget").value;
        let remainingEl = document.getElementById("bank-amount");
        let amountLeft = budget - this.getTotalSpending()
        remainingEl.textContent = amountLeft;
        return amountLeft;
    }

}


//----------------- Global Variables --------------------// 
// Get the nameInput of user to update h1 header with customer name.
let nameInput = document.getElementById("name");

// Creating an object of new user
let User = new spending();

// add is the button that submits new expense  
let add = document.getElementById("add");

// selectItems is the dropDown that selects the category item element
let selectItems = document.getElementById("category");

// This hint should show in page if user entered an amount less than 0 or a string. 
let hintEL = document.getElementById("amountHint");

//weekly budget to use everywhere
let weeklyBudget = document.getElementById("weeklyBudget");




//-------------------- Main Function ------------------------// 
// This Function will check "Category" + added Amount
// It will add amount spent into respected category

function main() {
    // amount variable will store the amount entered as an expense 
    let amountStr = document.getElementById("amount").value;
    let amount = Number(amountStr);

    // selectedItem will store the category  entered with expense. 
    let selectedItem = selectItems.options[selectItems.selectedIndex].value;
    // let nameChange = nameInput.value;
    // let budgetAlert = weeklyBudget.value;

    // If the amount entered is less than 1 or not a number it will not add or get the total.
    // Below conditional statement will check category then adds the amount expensed in in respected category
    // Also Once a new amount is added in respected category below will return new total expense of same respected category
    // It will also return the total spending across all categories. 
    
    if (amount < 1 || isNaN(amount)) {
        hintEL.textContent = "Please Enter a number bigger than 0";
    } else if (amount  > User.getAmountLeft()) {
        hintEL.textContent = "You don't sufficient funds for this transaction"; //alert if insufficient funds
    } else if (selectedItem === 'food') {
        User.addFoodSpending(amount);
        User.getSpending(selectedItem);
        User.getTotalSpending();
        User.getAmountLeft();
    } else if (selectedItem === 'bills') {
        User.addBillsSpending(amount);
        User.getSpending(selectedItem);
        User.getTotalSpending();
        User.getAmountLeft();
    } else if (selectedItem === 'ent') {
        User.addEntSpending(amount);
        User.getSpending(selectedItem);
        User.getTotalSpending();
        User.getAmountLeft();
    } else if (selectedItem === 'clothing') {
        User.addClothingSpending(amount);
        User.getSpending(selectedItem);
        User.getTotalSpending();
        User.getAmountLeft();
    }
}

// ----------- Name function ---------------- //
// This function will add the name entered by user in the page h1 element and budget into span below. 
//Also checks if input was entered into name and budget inputs

function addName() {
    let nameChange = nameInput.value;
    document.querySelector("h1").textContent = `Hello, ${nameChange}`;
    let weeklyBudgetValue =  Number(weeklyBudget.value);
    document.getElementById("span").textContent = `$${User.getAmountLeft()}`;

    if (weeklyBudgetValue === "") {
        hintEL.textContent = "Please enter your budget";
    } else if (nameChange === "") {
        hintEL.textContent = "Please enter your name first."; 
    } else if (weeklyBudgetValue < 1 || isNaN(weeklyBudgetValue)) {
        hintEL.textContent = "Please Enter a number bigger than 0";
    }
}

// ------------------------------------------- //



// ---------- Listener Section ---------- //
// Adding an event Listener to trigger every time a user is adding new expense.
add.addEventListener("click", main, false);

// Adding an event Listener to update the user name in the page. 
nameInput.addEventListener("submit", addName, false);

// ------------------------ Charts --------------------------- //
var ctx = document.getElementById('myChart').getContext('2d');

function chartUpdates() {
    entSpending = User.getSpending('ent');
    clothingSpending = User.getSpending('clothing');
    billsSpending = User.getSpending('bills');
    foodSpending = User.getSpending('food');
    let myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Entertainment','Clothing','Bills','Food'],
            datasets: [{
                label: 'Expense by category',
                data: [entSpending,clothingSpending,billsSpending,foodSpending],
                backgroundColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }]
        },
        options: {
            responsive: false
        }
    })
}
add.onclick = chartUpdates;