const bill = (order) =>{
let serviceTax = 10
let total = 0
total = parseFloat(order + (serviceTax/100) * order).toFixed(2)
console.log(`Total order : ${order}`)
console.log(`Total service tax: ${((serviceTax/100) * order)}`) 
return total
}

console.log(`Total bill is : £${parseFloat(bill(100.50)).toFixed(2)}`)