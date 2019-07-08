// console.log(Math.random());
// console.log(Math.random() * 50);
// console.log(Math.floor(Math.random() * 50));

// var title = "my name"

// console.log(title.length);

// var text = 'dung dung ces!';
// console.log(text.indexOf('ces'));  // 0
// console.log(text.indexOf('u'));     // 1
// console.log(text.indexOf('jreng')); // -1

// var car1 = 'Lykan Hypersport';
// var car2 = car1.substr(8);
// console.log(car2); // Hypersport

// var motor1 = 'zelda motor';
// var motor2 = motor1.substr(2, 5);
// console.log(motor2); // ld

// var username    = ' administrator ';
// var newUsername = username.trim(); // 'newUsername = 'administrator'

// var angka = '90' , desimal = '3,4'

// angka = parseInt(angka);
// desimal = parseFloat(desimal);

// console.log(angka);
// console.log(desimal);

// var loop = 1;

// while(loop < 10){
//     console.log('loop masih dibawah 10');
//     loop++;
// }

// var deret = 5 , jumlah = 0

// while(deret > 0){
//     jumlah += deret;
//     deret--;

//     console.log("jumlah saat ini  " + jumlah);
// }
//     console.log(jumlah);


// for(var deret = 1; deret <= 10; deret++ ){
//     console.log("deret ke-" +deret);
// }

// var jumlah = 0;
// for(var deret = 5; deret > 0; deret--){
//     jumlah += deret;
//     console.log("jumlah ke " + jumlah);
// }
//     console.log(jumlah);

// console.log('--------increment-------')
// for(var deret = 0; deret < 10; deret += 3){
//     console.log('iterasi increment ' +deret);
// }

// console.log('--------decrement-------')
// for(var deret = 20; deret > 0; deret -= 4){
//     console.log('iterasi decrement' +deret);
// }

// function ucapan(){
//     console.log('hallo geng');
// }

// ucapan();

// function perkalian(){
//     return 2;
// }
// let temp = perkalian();
// console.log(temp);

// function kali (a,b){
//    return a*b;
// }
// let tamp = kali(3,4);
// console.log(tamp);

// function kali(angka){
//     return angka *2;
// }

// var tamp = kali(7);
// console.log(tamp);


var example = 'contoh';

var fungsiA = function(){
    console.log(example + 'di fungsi a');
    var fungsiB = function(){
        console.log(example + 'di fungsi b');
    };
    fungsiB();
};
fungsiA();



var fungsiA = function() {
    console.log(this); // global Window object
  }
  
  var sampleObject = {};
  sampleObject.fungsiB = function() {
    console.log(this); // Object of sampleObject
  }
  
  fungsiA();
  sampleObject.fungsiB();