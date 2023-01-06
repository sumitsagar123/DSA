function spiralTraversal(arr){
    
   let T,B,L,R,dir;
    T=0;
    B=arr.length-1;
    L=0;
    R=arr[0].length-1;
    dir=0;
    let i;
    let ans=""
    while(T<=B && L<=R)
    {
        if(dir===0)
        {
             for(i=T;i<=B;i++)
                ans+=arr[i][L]+" "
            L++;
        }
        else if(dir==1)
        {
             for(i=L;i<=R;i++)
                ans+=arr[B][i]+" "
            B--;  
        }
        else if(dir==2)
        {
             for(i=B;i>=T;i--)
                ans+=arr[i][R]+" "
            R--;
        }
        else if(dir==3)
        {
         for(i=R;i>=L;i--)
                ans+=arr[T][i]+" "
            T++;
           
        }
        dir=(dir+1)%4;
        // console.log(dir)
    }
    console.log(ans)
  
}

spiralTraversal([[1 ,2 ,3 ,4],[5 ,6, 7, 8],[9, 10, 11, 12]])