function plusMinus(arr) {
    // Write your code here
    
    let positive =0
    let negative = 0
    let zero = 0
    
    for(let i =0; i < arr.length; i++){
        //for each index in the array is bigger than 0 positive +1
        if( arr[i] > 0){
            positive ++
        //for each index in the array is less than 0 negative +1
        }else if(arr[i] < 0){
            negative ++
        }else{
            zero++
        }
        
    }
    console.log((positive / arr.length).toFixed(6))
    console.log((negative / arr.length).toFixed(6))
    console.log((zero / arr.length).toFixed(6))
   
}
plusMinus([1,2,-2,-2,0])

 

