function hitungKata(kalimat){
    var j = 0;

    for(i= kalimat.length-1; i>=0; i--){
        
        if(kalimat[i] === ' '){
            j+=1;
        }
    }

    return j+1;
}

console.log(hitungKata('i have a dream'));