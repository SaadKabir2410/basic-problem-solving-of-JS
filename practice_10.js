let coffee = 5.99
let bagel = 2.95
let total = (coffee + bagel)
let Convert_to_cents = (total * 100) 
let MathRound = Math.round(Convert_to_cents)
let Calculation = 'Total cost: ' + MathRound + ' cents'
console.log(Calculation)
let TemplateString = `Total cost: ` + MathRound + ` cents`
console.log(TemplateString)
console.log(
TemplateString +
`
Thank you,come again
`
)