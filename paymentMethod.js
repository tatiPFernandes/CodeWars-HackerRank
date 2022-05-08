const paymentMethod = (product) => {
    let discout = 10;

    let total = parseFloat(product).toFixed(2)
    console.log(`Product price: £${total}`)
    
    let onceOffPayment = total - ((discout / 100) * total)
    console.log(`Once-off-payment: £${total- parseFloat((discout / 100) * total).toFixed(2)}`)

    let installment = parseFloat((total / 3)).toFixed(2)
    console.log(`Monthly payment: £${installment}`)

    return total;

}

paymentMethod(60.83)