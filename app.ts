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
// console.log(car);
car = {brand:"bwm", series: 3};
// console.log(car);

// function
function returnMyName():string{ //types berdasarkan return, jika string harus string jika number harus number
    return myName;
}
console.log(returnMyName());

// void
function sayHello():void{ //gak ada yang dikembalikan
    // console.log(sayHello());
}

// argument types
function multiply(value1:number, value2:number){
    return value1 * value2;
}
// console.log(multiply(2,5));

// function types
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(2,3));

// objects
let userData: {name: string, age: number} = {
    name: "rama",
    age: 22
};
console.log(userData);