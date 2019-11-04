function perkalianUnik(arr){
    var ca=[];
    for(var a=0; a<arr.length; a++){
        var ar= 1;
        for(var b=0; b<arr.length; b++){
            if(a !== b){
                ar *= arr[b];
            }
        }
        ca.push(ar);
    }
    return ca;
}

console.log(perkalianUnik([3, 2, 10]));