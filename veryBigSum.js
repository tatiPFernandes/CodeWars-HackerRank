const aVeryBigSum = (ar) =>{
     
    //returning a single result from a sum of the current value and accumulator value 
    return ar.reduce((accumulator,currentvalue)=> accumulator + currentvalue,0)
}

console.log(aVeryBigSum([10,20,30]))