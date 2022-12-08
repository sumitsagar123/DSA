let sum=0
let count=0
for(let i=0;i<=13;i++){
let ans=prime(i)
if(ans){
    sum+=i
    count++
}
}	
console.log(Math.floor(sum/count))



function prime(n){
if(n<2){
    return false
}
for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i===0){
        return false
    }
}
return true
}