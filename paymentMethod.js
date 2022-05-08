const paymentMethod = (product) => {
    let discout = 10;
    let installment = 4;

    let total = parseFloat(product).toFixed(2)
    console.log(`Product price: £${total}`)
    
    installment = parseFloat((total / installment)).toFixed(2)
    console.log(`Monthly payment: £${installment}`)

    let onceOffPayment = total - ((discout / 100) * total)
    console.log(`Once-off-payment: £${total- parseFloat((discout / 100) * total).toFixed(2)}`)


    return total;

}

paymentMethod(60.83)