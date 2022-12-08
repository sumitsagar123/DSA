function fun(arr){
    arr.sort((a, b) => a - b)
    let res=0
    let start=0
    let end=arr.length-1
    while(start<end){
        let sum=arr[start]+arr[end]
        if(sum===0){
            res=Math.max(res,Math.max(arr[start],arr[end]))
            return res
        }else if(sum<0){
            start++
        }else{
            end--
        }
    }
    if(res===0){
        return -1
    }else{
        return 0
    }
    
}
let x=fun([2,4,-4,6,-9,9,-9,58,57,-98,8,98])
console.log('x:', x)