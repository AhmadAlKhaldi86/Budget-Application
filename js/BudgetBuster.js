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
    }function setBudget() {
