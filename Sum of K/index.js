function fun(N, K, arr){
   let flag=false
   for(let i=0;i<N-1;i++){
       for(let j=i+1;j<N;j++){
           if(arr[i]+arr[j]==K){
               flag=true
           }
           else{
               flag
           }
       }
   }
   console.log(flag?"Yes":"No")
    
}
fun(5,31,[10 ,11 ,13 ,17 ,21])