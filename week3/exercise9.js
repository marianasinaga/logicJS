function mean(arr){
    var jumlah = 0;

    for(var i in arr){
        jumlah += arr[i]
    }

    return Math.round(jumlah/arr.length);
}

console.log(mean([1,2,3,4,5]));
console.log(mean([3,5,7,5,3]));
console.log(mean([6,5,4,7,3]));
console.log(mean([1,3,3]));
console.log(mean([7,7,7,7,7]));