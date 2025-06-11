// math exercise 
let ProductItem = 3
let TotalCost = 47.93
let TosterPrice = 18.99
let TwoItemCost = (TotalCost - TosterPrice)
let perItemCost = (TwoItemCost / 2)
console.log(TwoItemCost)
console.log(TwoItemCost)

// Question 1 calculate only product price with sen

let TotalProductCost = (TwoItemCost + TosterPrice)
let calculateWithSen = (TotalProductCost * 100)
console.log(calculateWithSen)

// Question 2  calculate total product price

let TotalProductPrice = (TwoItemCost + TosterPrice)
console.log(TotalProductPrice)

// Question 3 calculate the product cost with 10% Taxes

let Taxes = 0.1
let withTenPercentTax = (TotalProductPrice * Taxes)
console.log (withTenPercentTax)

// Question 4 calculate the full cost 
let CostWithTax = (TotalProductPrice + withTenPercentTax)
console.log (Math.round(CostWithTax))

