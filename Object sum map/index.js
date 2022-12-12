function mapCharAndSum(N,K,str) {
let obj={}
    let alph="abcdefghijklmnopqrstuvwxyz"
    for(let i=0;i<alph.length;i++){
        if(obj[alph[i]]===undefined){
            obj[alph[i]]=N++
        }else{
            obj[alph[i]]++
        }
    }
    let sum=0
    for(let j=0;j<K;j++){
       sum+=obj[str[j]]
   }
    console.log(sum)
}
mapCharAndSum(30,3,"abc")