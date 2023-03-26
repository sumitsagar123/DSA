function identifyPrime(num) {
    // Write code here
    let count=0
    for(let i=1;i<=num;i++){
        if(num%i===0){
            count++
        }
    }
    console.log(count==2?"Yes":"No")
}

identifyPrime(13)