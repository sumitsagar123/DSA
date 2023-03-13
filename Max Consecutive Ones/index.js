// Max Consecutive Ones

var findMaxConsecutiveOnes = function(nums) {
    let x=0
   let ans=0
   for(let i=0;i<nums.length;i++){
       if(nums[i]==1){
           x++
       }else{
           x=0
       }
   ans=Math.max(ans,x)
   }
  // console.log(ans)
   return ans
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));