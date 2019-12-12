#### Create an application that allows users to enter their weekly budget.

- This Step requires an alert for the user to enter their week budget.
- Store the user input in a variable "weeklyBudget"
- When the week ends start over.

#### Items purchased should be added in a list with their cost.

- itemName
- ItemCost
- TotalSpent : This step will require a variable that sums up all amount spent during the week to last purchased item.

#### 
#### 
#### 

```diff
+ track how much is left based on their purchases throughout the week. <br>
+ Must indicate to the user how much money has been spent.<br>
+ If their budget is consumed within the week, they must be notified that they cannot purchase additional items.
```

- Subtract "TotalSpent" from "weeklyBudget"
- weeklyBudget amount left can be tracked in HTML/CSS in the page with colors
- When amount hits 10% left of total budget an alert is triggered.
- If the TotalSpent = or > than weeklyBudget - Alert they cannot spend.

```diff
+ Allow the user to choose between four categories for each purchase. <br>
+ The user should be able to see how much money is being spent on each of the four categories.
```

- We can create a class called purchasedItems
- Add methods where
  if Entertainment - addEntertainment(name, cost);
- Entertainment - addEntertainment(name, cost);
- Food - addFood(name, cost);
- Clothing - addClothing(name, cost);
- Bills - addBills(name, cost);
- Method that gives the total of any category.
