const bill = (order) =>{
let serviceTax = 10
let total = 0
total = order + parseFloat((serviceTax/100).toFixed(2) * order)
console.log(`Total order : ${order}`)
console.log(`Total service tax: ${((serviceTax/100) * order)}`) 
return total
}

console.log(`Total bill is : £${bill(100.50)}`)