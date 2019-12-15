let weeklyBudget = document.querySelector("budget")[0].value;
let a = weeklyBudget;

//function to automatically write weeklyBudget on screen
(function writeWeeklyBudget() {
document.querySelector("span").textContent += a;
})();

function main() {
    let g = document.getElementsByID("name")[0].value;
    document.getElementsByTagName("h1")[0].textContent += g;
}
//if we want to use the day of the week   
/*let d = new Date();
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
let n = weekday[d.getDay()];
if (n === weekday[4]) {
}*/

// function to alert if weeklyBudget goes below 10%
let tenPercentWeeklyBudget = a/ 10;
let b = tenPercentWeeklyBudget;
if (a >= b) {
    console.log("You have $" + b + " remaining"); 
}

//write each expense on screen
let formElement = document.querySelector("form");
let click = document.getElementById("click");
click.addEventListener("click", () => {
    event.preventDefault();

    let name = document.getElementById("display").value;
    const list = document.createElement("li");
    const item = document.createTextNode(name);
    
    list.appendChild(item);

    const entertainmentItemList = document.getElementById("entertainment-list");
    const foodItemList = document.getElementById("food-list");
    const clothingItemList = document.getElementById("clothing-list");
    const billsItemList = document.getElementById("bills-list");
    
    if (formElement.elements["Expenses"].value === "entertainment") {
        entertainmentItemList.appendChild(list);
    } else if (formElement.elements["Expenses"].value === "food") {
        foodItemList.appendChild(list);
    } else if (formElement.elements["Expenses"].value === "clothing") {
        clothingItemList.appendChild(list);
    } else if (formElement.elements["Expenses"].value === "bills") {
            billsItemList.appendChild(list);
    }
});