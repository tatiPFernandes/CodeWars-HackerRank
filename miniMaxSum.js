const miniMaxSum = (arr) =>{
    let max = arr[0] 
    let min = arr[0] 
    let sum = 0
    for(let i = 0; i < 5; i++){
        //if the current max is < than the current num  
        //So,the max will be iquals that num
        if(max < arr[i]){
            max = arr[i]
        }
        //if the current min is > than tge current num
        //So, the  min will be equals that num
        if(min > arr[i]){
            min = arr[i]
        }
        sum += arr[i]
    }
    //subtracting the lowest num from the highest four num
    let maxSum = sum -min;
    //subtracting the highest num from the lowest four num
    let minSum = sum - max;
    console.log(minSum + ' ' + maxSum)
}

miniMaxSum([1, 2, 3, 4, 5])