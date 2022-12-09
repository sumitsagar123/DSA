function fun( item1,item2){
    let bag=""
   for (var i = 0; i<item2.length; i++) {
    for (var j = 0; j<item1.length; j++) {
        if (item2[i] == item1[j]) {
            item1 = item1.slice(0, j).concat(item1.slice(j+1, item1.length));
            // console.log(item1)
        }
    }
}
console.log(item1.join(" "))
}

fun([2,3,4,2],[2,3])