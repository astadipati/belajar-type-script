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
console.log(alamat[0]);
