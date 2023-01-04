function fun(N,arr){
    let matrix=[]
    for(let i=0;i<N;i++){
        let arr1=[]
        for(let j=0;j<N;j++){
            arr1.push(0)
        }
        matrix.push(arr1)
    }
    let left=0
    let right =N-1
    let top=0
    let bottom=N-1
    let index=0
    while(index<N*N){
        for(let i=left;i<=right;i++){
            matrix[top][i]=arr[index]
            index++
        }
        top++
        for(let i=top;i<=bottom;i++){
            matrix[i][right]=arr[index]
            index++
        }
        right--
        for(let i=right;i>=left;i--){
            matrix[bottom][i]=arr[index]
            index++
        }
        bottom--
        for(let i=bottom;i>=top;i--){
            matrix[i][left]=arr[index]
            index++
        }
        left++
        
    }
    let sum=0
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(i===j||i+j===N-1){
                sum+=matrix[i][j]
            }
        }
    }
    console.log(sum)
}

fun(3,[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9])