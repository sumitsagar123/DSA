function reverseTheValue(num) {
    let x=num
    let output = 0; 
    while(x!==0){
        output = (output * 10) + (x % 10);  
        x = (x - (x % 10))/10; 
    }
    console.log(output);
}
reverseTheValue(971)
