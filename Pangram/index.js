var checkIfPangram = function(sentence) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let mymap=new Map()
   for(let i=0;i<alpha.length;i++){
       mymap.set(alpha[i],1)
   }

for(let i=0;i<sentence.length;i++){
       if(mymap.get(sentence[i])){
           mymap.delete(sentence[i])
       }
   }
   
//    console.log(mymap)
   return mymap.size==0?true:false
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));