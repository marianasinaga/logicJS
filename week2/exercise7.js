// Tugas 1

function shoutOut(){
    return "Halo Function!"; 
}
console.log(shoutOut());

//Tugas 2

function calculateMultipy(num1,num2){
    return num1 * num2;
}

num1 = 5;
num2 = 6;

var hasilPerkalian = calculateMultipy(5,6);
console.log(hasilPerkalian);

//Tugas 3

function processSentence(name, age, address, hobby){
    return 'nama saya'+ ' ' + name + ' '+ 'umur saya'+ ' ' + age + ' '+ 'tahun,'
    + 'alamat saya di '+ ' ' + address + ', dan saya punya hobby yaitu'+ ' ' +hobby ; 

}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);