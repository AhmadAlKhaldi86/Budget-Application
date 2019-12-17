console.log("BudgetBusterScript")
//class for all uses of input
class budgetInfo {
    constructor () {
        this.budgetForm = document.getElementById("budget-form");
        this.budgetInput = document.getElementById("budget-input");
        this.budgetAmount = document.getElementById("budget-amount");
        this.expenseAmount = document.getElementById("expense-amount");
        this.bank = document.getElementById("bank");
        this.balanceAmount = document.getElementById("bank-amount");
        this.entertainmentInput = document.getElementById("entertainment-input");
        this.foodInput = document.getElementById("food-input") ;
        this.clothingInput = document.getElementById("clothing-input");
        this.billsInput = document.getElementById("bills-input");
        this.expenseForm = document.getElementById("expense-form");
        this.expenseInput = document.getElementById("expense-input");
        this.expenseList = document.getElementById("expense-list");
        this.itemList = [];
    }
}

