// string
let myName = 'rama';
// re-assign string
myName = 'edo';
// console.log(myName);

// number
let myAge = 27;

// boolean
let jenisK = false;
jenisK = true;
// console.log(jenisK);

// assign types
let umur:number;
umur = 25;
// umur ='27'; bukan string
// console.log(umur);

// array
// let hobi  = ["masak","mancing"];
// console.log(hobi[1]);
let hobi:any[]  = ["masak","mancing"];
hobi = [100];
// console.log(hobi);//return array [100]

// tuples
// urutan itu penting & jumlah array juga, lebihnya akan error
let alamat: [string,number] =["tuban jatim",21];
alamat = ["latsari",11];
// console.log(alamat[0]);

// enum "expresive" sesuatu, jika tanpa types maka default otomatis array,
// untuk memudahkan beri types
enum Warna {
    Hijau,
    Kuning = 100,
    Merah //default akan bernilai 101 lanjutan dari types kuning
}
let myColor : Warna = Warna.Kuning;
// console.log(myColor);

// any the most flexible types
let car:any ="bmw";
console.log(car);
car = {brand:"bwm", series: 3};
console.log(car);

