// Melakukan looping data array


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
  
    for(i=0; i<input.length; i++){
        console.log("nomor" + " " + ":" + " " + dataHandling(input[i][0]))
        console.log("Nama" + " " + ":" + " " + input[i][1])
        console.log("TTL" + " " + ":" + " " + input[i][2] + " " + input[0][3])
        console.log("Hobi" + " " + ":" + " " + input[i][4])
    }

