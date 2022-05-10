const gradingStudents = (grades)=>{
    
    for(let i = 0; i < grades.length; i++ ){
        if(grades[i] >=38){
            //if the remaider is 3 in order to get the next mutiple of 5 nedd to add 2
            if(grades[i] % 5 === 3){
                grades[i] += 2
            //if the remaider is 4 in order to get the next mutiple of 5 nedd to add 1
            }else if(grades[i] % 5 === 4){
                grades[i] += 1
            }
        }
    }
    return grades
}

console.log(gradingStudents([73,67,39,33]))