// Menggunaka Built-in Function pada array

var inputan = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
inputan[1] = inputan[1]+" "+"Elsharawy"
inputan[2] = "Provinsi" + " " + inputan[2]
inputan.splice(4,2,"Pria", "SMA Internasional Metro")
console.log(inputan)
var tanggal = inputan[3].split("",2);
var bulan = inputan[3].split("/").length-2
var tahun = inputan[3]
switch (tanggal) {
    case ['2','1']:
    console.log("januari")
    break;

    default:
    console.log("tidak ada")
}
var date = inputan[3].split("/")
console.log(date);
var elemen2 = inputan.slice(1,1)
console.log(elemen2)








