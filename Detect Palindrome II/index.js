function detectPalII( S){
   let obj={}
for(let i=0;i<S.length;i++){
    let char=S[i]
    if(obj[char]===undefined){
        obj[char]=1
    }else{
        obj[char]++
    }
 }
 let noofodd=0
 for(let key in obj){
     if(obj[key]%2==1){
         noofodd++
     }
 }if(noofodd>1){
     console.log("Not Possible!")
 }else{
     console.log("Possible!")
 }
}

detectPalII("aabbccqww")
