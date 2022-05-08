const bill = (order) =>{
let tax = 10
let total = 0
total = order + ((tax/100) * order) 
return total
}

console.log(bill(100))