//Mengakses Nilai dalam Array

function balikString(kt){

    var balik =""

    for(i=kt.length-1;i>=0;i--){
        balik+=kt[i]
    }
    return balik

}
console.log(balikString("medan"))

