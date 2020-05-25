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
// console.log(car);
car = { brand: "bwm", series: 3 };
// console.log(car);
// function
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    // console.log(sayHello());
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2,5));
// function types
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
// console.log(myMultiply(2,3));
// objects
var userData = {
    name: "rama",
    age: 22
};
// console.log(userData);
// complex
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 300],
    output: function (all) {
        return this.data;
    }
};
