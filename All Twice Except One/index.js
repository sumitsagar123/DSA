function fun(arr){
    let obj={}
    for(let i=0;i<arr.length;i++){
        let char=arr[i]
        if(obj[char]===undefined){
            obj[char]=1
        }else{
            obj[char]++
        }
        
    }
      let min=Infinity
      let ele;
        for(let key in obj){
            if(min>obj[key]){
                min=obj[key]
                ele=key
            }
        }
        console.log(ele)
}
let x=fun([1 ,2 ,1 ,3 ,2])