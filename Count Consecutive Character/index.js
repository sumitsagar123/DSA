var maxPower = function(s) {
   let x=1
   let ans=1
   for(let i=1;i<s.length;i++){
       if(s[i-1]==s[i]){
           x++
       }else{
           ans=Math.max(x,ans)
           x=1
       }
   }
   ans=Math.max(x,ans)
   return ans
};

console.log(maxPower("leetcode"))