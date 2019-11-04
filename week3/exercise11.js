function tentukanDeretAritmatika(arr){
    var selisih = arr[1]-arr[0];
    var deretAritmatika= true;

    for(var i =1; i< arr.length-1; i++){
        var deretSalah = arr[i+1]-arr[i];
        if(deretSalah !== selisih){
            deretAritmatika= false;
        }
    }
    return deretAritmatika;
}

console.log(tentukanDeretAritmatika([1,3,6,9]));