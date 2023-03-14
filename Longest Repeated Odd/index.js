// Longest Repeated Odd
function longestRepeatedOdd( array) {
    let count=1
    let max=0
    let flag=0
    for(let i=0;i<array.length;i++){
        if(array[i]%2!==0){
            flag++
            if(array[i]==array[i+1]){
            count++
            if(count>max)
                max=count
            }
            else{
                count=1
                }
         }
    }
    console.log( flag===0?0:Math.max(max,count))
}

longestRepeatedOdd([1, 1, 1, 1 ,2 ,2 ,2, 2, 2, 1, 1, 1])