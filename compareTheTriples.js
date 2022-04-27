//Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, 
//awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
//
//The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), 
//and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
//
//The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
//
//If a[i] > b[i], then Alice is awarded 1 point.
//If a[i] < b[i], then Bob is awarded 1 point.
//If a[i] = b[i], then neither person receives a point.
//Comparison points is the total points a person earned

const compareTriples =(a, b)=>{
    let alicePoint = 0;
    let bobPoint = 0; 

    // Loop through and compare the various indexes of the two arrays
    for(let i = 0; i<a.length; i++){
        if(a[i]>b[i]){
            alicePoint++;
        }else if(b[i]>a[i]){
            bobPoint++
        }
    }
     // Add alice and bobs point to the array
        let finalArray =[]
        finalArray.push(alicePoint)
        finalArray.push(bobPoint)

        //return the winner's name
        if(alicePoint > bobPoint){
            return `Total of points = ${finalArray} -> Alice wins`
        }
        if(alicePoint === bobPoint ){
            return `Total of points = ${finalArray} -> Draw`
        
        }else{
            return `Total of points = ${finalArray} ->  Bob wins`
        }

        
      // return finalArray;
    }
    console.log(compareTriples([8,8,8], [8,8,8]))
