const aVeryBigSum = (ar) =>{
     
    //returning a single result from a sum of the previous value and accurent value 
    return ar.reduce((acc,cv)=> acc + cv,0)
}

console.log(aVeryBigSum([10,20,30]))