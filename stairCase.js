const stairCase = (n) =>{

    let hash = "#";
    let line ="";
    let hashPosition = n -1;
    
    for(let lineIndex = 0; lineIndex < n; lineIndex++){
        for(let columnIndex = 0; columnIndex < n; columnIndex++){
            if(columnIndex < hashPosition){
                line += " ";
            }else{
                line += hash;
            }
        }
        console.log(line);
        //setting line back to a space for a new column
        line = "";
        
        hashPosition -= 1
       
    }
   
}
 stairCase(6)
