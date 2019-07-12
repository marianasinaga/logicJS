// balik kata

//cara pertama
function balikKata(kata){

    let balik = kata.split('').reverse().join('');
    return balik;
}

console.log(balikKata('medan'));

// cara ke 2
function balikKata(kata){
    var balik='';
    for(var i=kata.length-1; i>=0;i--){
      balik=balik+kata[i];
    }
    return balik;
}
console.log(balikKata('Hello World and Coders'));

//catatan
/*
split('') = membagi
reverse() = membalikkan array
join('')= menggabungkan
*/ 

