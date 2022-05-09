//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

const birthdayCakeCandles =( candles) =>{
    
    //finding the biggest numnber  
    let bigCandle = Math.max(...candles);
    let count = 0;

    //countig how many biggest number are in the array
    candles.forEach(candle => {
        if(candle === bigCandle){
            count ++
        }
    });    
    
return count;
}


console.log(birthdayCakeCandles([3,2,1,3]))