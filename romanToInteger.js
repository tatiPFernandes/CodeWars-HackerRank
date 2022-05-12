const romanToInteger = (s) =>{

    const symbolValues = {I: 1, V: 5, X: 10, L:50, C:100, D:500, M:1000}
    let sum = 0
    
    s.split('').forEach((num, i )=>{
        // if 
        if(symbolValues[num] < symbolValues[s[i+1]]){             
        sum -= symbolValues[num]
    }else {
        sum += symbolValues[num]}
    })

    return sum

}

console.log(romanToInteger("LVIII"))