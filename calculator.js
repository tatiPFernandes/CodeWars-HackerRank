const sum = (n1,n2) =>{
    return n1 + n2
}

const sub =(n1,n2)=>{
    return n1 - n2
}

const divide= (n1,n2)=>{
    return n1 / n2
}

const times = (n1,n2) =>{
    return n1 * n2
}

const calculator = (n1, n2, operation) =>{

    const operations = {
        sum: sum(n1, n2),
        sub: sub(n1, n2),
        times: times(n1,n2),
        divide:divide(n1,n2)
    }

   return operations[operation]
  
}; 

const result = calculator(10,5,"sum")
console.log(result) 



 



