//const moveAllZeroToend = (arr)=>{
//
//    let nonZeros = 0
//    //adding non zeros number to the beginning of the array
//    for(let i = 0; i < arr.length; i++){
//        if(arr[i] !== 0){
//            arr[nonZeros] = arr[i];
//            nonZeros++;
//        }
//    }
//
//    for(let i = nonZeros; i < arr.length; i++){
//        arr[i]= 0
//    }
//    return arr
//    
//}
let moveAllZeroToend = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));


console.log(moveAllZeroToend([0,0,1,0,1,2,0,3]))