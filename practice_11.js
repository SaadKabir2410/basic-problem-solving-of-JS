// challenge_1
let twoBasketBall = (20.95 + 20.95)
let twoTshirt = (7.99 + 7.99)
let Beforetotal = 57.88
let UpdatePrice = (twoBasketBall + twoTshirt + Beforetotal)
console.log(`Items(4): `, Math.round(UpdatePrice))

// challenge_2
let twoShippingCost = (4.99 + 4.99)
let updateShippingCost = (twoShippingCost + 9.98) //with old shipping cost
let finalOutput = `Shipping & handling: ${Math.round(updateShippingCost)}`
console.log(finalOutput)

// challenge_3
let TotalBeforeTax = (UpdatePrice + updateShippingCost)
console.log(`Total before tax: ${Math.round(TotalBeforeTax)}`)

// challenge_4
let estimatedTax = 0.1
let TaxOfProduct = (TotalBeforeTax * estimatedTax)
console.log(`Estimated Tax (10%): ${Math.round(TaxOfProduct)}`)
console.log('Order total : ' + (TotalBeforeTax + TaxOfProduct))

        let name = 'kabir';
        //excercise-5b
        console.log(alert( `my name is ${name}`))