// // 1.  Melakukan Looping Menggunakan While


// console.log('looping pertama');
// var word = 0;
// while(word < 20){
//     word+=2;
//     console.log(word + '-' +'I love coding');
// }

// console.log('looping kedua');

// var word = 20;
// while(word > 2){
//     word -= 2;
//     console.log(word + '-' + 'I will become fullstack developer');
// }

// // 2. Melakukan Looping Menggunakan For


// console.log('looping pertama');

// for(var word = 1; word <= 20; word ++){
//     console.log(word + ' ' + '-' + 'I love coding');
// }

// console.log('looping kedua');

// for(var word=20; word >= 1; word--){
//     console.log(word + ' ' + '-' +'I will become fullstack developer');
// }

// 3. Angka Ganjil dan Genap

// bagian pertama

// let array = [1,2,3,4,5,6, 7, 8, 9, 10,11 ,12, 13, 14, 15, 16, 17, 18, 19, 20,
//     21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//     31 ,32 ,33, 34, 35, 36, 37, 38, 39, 40,
//     41, 42, 43, 44, 45,46, 47, 48, 49, 50,
//     51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//     61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
//     71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
//     81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
//     91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// for(var counter = 1; counter <= array.length; counter++){
//     if(counter % 2 == 0){
//         console.log(counter + '-' + ' ' +'counter sekarang genap'   );
//     }
//     else{
//         console.log(counter + ' ' +'counter sekarang ganjil' );
//     }
// }

//bagian kedua

for(var counter = 1; counter <= 100; counter+=2){
    if(counter % 3 == 0){
        console.log( counter + ' ' + 'KELIPATAN 3');
    }
    else{
        console.log(counter + " tidak ada tiga");
    }
}

// pertambahan counter 5

var counter = 1;
while(counter <= 100 ){
    counter+=5;
    if (counter % 6 == 0){
        console.log( counter + ' ' + 'KELIPATAN 6');
    }    
    else{
        console.log(counter + "tidak kelipatan 6");
    }
}

// pertambahan counter 9

var counter = 1;
while(counter <= 100 ){
    counter+9;
    if (counter % 10 == 0){
        console.log( counter + ' ' + 'KELIPATAN 10');
    }
    else{
        console.log(counter + "tidak kelipatan 10");
    }
}


// perbaikan

// for(let counter = 0; counter < Array.length; counter++){
//     if (counter % 6 == 0){
//         console.log( counter + ' ' + 'KELIPATAN 6');
//     }    
//     else{
//         console.log(counter + "tidak kelipatan 6");
//     }
// }
