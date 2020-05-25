"use strict";
// string
var myName = 'rama';
// re-assign string
myName = 'edo';
// console.log(myName);
// number
var myAge = 27;
// boolean
var jenisK = false;
jenisK = true;
// console.log(jenisK);
// assign types
var umur;
umur = 25;
// umur ='27'; bukan string
// console.log(umur);
// array
// let hobi  = ["masak","mancing"];
// console.log(hobi[1]);
var hobi = ["masak", "mancing"];
hobi = [100];
// console.log(hobi);//return array [100]
// tuples
// urutan itu penting & jumlah array juga, lebihnya akan error
var alamat = ["tuban jatim", 21];
alamat = ["latsari", 11];
// console.log(alamat[0]);
// enum "expresive" sesuatu, jika tanpa types maka default otomatis array,
// untuk memudahkan beri types
var Warna;
(function (Warna) {
    Warna[Warna["Hijau"] = 0] = "Hijau";
    Warna[Warna["Kuning"] = 100] = "Kuning";
    Warna[Warna["Merah"] = 101] = "Merah"; //default akan bernilai 101 lanjutan dari types kuning
})(Warna || (Warna = {}));
var myColor = Warna.Kuning;
// console.log(myColor);
// any the most flexible types
var car = "bmw";
console.log(car);
car = { brand: "bwm", series: 3 };
console.log(car);
