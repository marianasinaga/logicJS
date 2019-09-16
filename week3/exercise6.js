function angka(num){
    for(var i=0; i<num; i++){
        num++;
    var numString = String(num);
    var len = numString.length;
    var numBalik ='';
    for(var j= len-1; j>=0; j--){
        numBalik += numString[j];
    }

    if(numString === numBalik){
        return num
        }
    }
}

console.log(angka(8))