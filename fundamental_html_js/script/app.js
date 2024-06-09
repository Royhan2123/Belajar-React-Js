// jika ingin membuat sebuah variabel menggunakan let
// let a = 5;
// a = 10;

// jika ingin menggunakan val seperti di kotlin harus menggunakan const seperti dart
// const a = 5;
// a = 10; <== ERRROR (const tidak bisa di ubah, atau nilai tetap)

// Penggunaan function
// function greet(
//   userName,
//   message /*PENGGUNAAN PARAMETER DI FUNCTION JAVASCRIPT*/
// ) {
//   // console.log(userName);
//   // console.log(message);

//   // PENGGUNAAN RETURN
//   return "Hello My name is " + userName + ". " + message;
// }

// console.log(greet("Roy ", "Hello Royhan"));
// console.time("myTimer");

/**
 * ARROW FUNCTION
 *
 * const greet = (userName,message) => {
 *   return userName + message;
 * }
 *
 * // ATAU
 *
 * const greet = (THIS_PARAMETER) => {THIS_FOR_COMPONENT}
 */

/**
 * OBJECT AND CLASS
 
  const greet = (userName, message) => {
  return userName + message;
};

const user = {
  name: "Rizki",
  age: 15,

  greet() {
    console.log(this.name);
  },
};

const people = {
  name: "Royhan",
  age: 20,
  jurusan: "Teknik Informatika",
};

console.log(people);
console.log(people.name);
console.log(people.jurusan);

console.log(user);
console.log(user.age);

const userName = "Max";
const userAge = 35;

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hi!");
  }
}

const user1 = new User("Manuel", 35);
console.log(user1);


class UsersR {
    constructor (name,age,jurusan) {
            this.name = name;
            this.age = age;
            this.jurusan = jurusan;
    }
}

const users2 = new UsersR("Ilham", 19,"Sistem Informasi")
console.log(users2);

console.log(users2.age);

 */

/**
 * Arrays and map()
 
const hobbies = [
    "swimming",
    "play footbal",
    "play game",
];

console.log(hobbies);


// push digunakan untuk menambahkan data ke dalam array hobbies
hobbies.push("work in office")

// find index digunakan untuk mencari data dari alamat array yang di berikan
const index = hobbies.findIndex((item) => {
    return item === "play game";
})

// otomatis akan menjawab 2 dikarenakan item === "play game"
console.log(index);

// penggunaan map pada array hobbies untuk menambahkan tanda seru ! pada akhir kata.
const editHobbies = hobbies.map((item) => item + "!");
console.log(editHobbies);

// or 
const editHobbies1 = hobbies.map((item) => ({text: item}));
console.log(editHobbies1);

 */

/**
 * Destructuring
 * Destructuring adalah fitur dalam JavaScript 
 * yang memungkinkan kita untuk "membongkar" nilai dari objek atau array 
 * ke dalam variabel terpisah.
 
const {name: userName, age} = {
    name: "Royhan",
    age: 20,
};

console.log(userName);
console.log(age);

// OR

const person = { nama: "Royhans", umur:30 };
const {nama, umur} = person;

console.log(nama);
console.log(umur);
 */

/**
 * SPREAD OPERATOR
 
const food = [
    "Mie Goreng",
    "Nasi Goreng",
];

const drinks = [
    "Jus Buah",
    "Teh Manis"
];

// disini kita menyatukan array food dan drinks, dengan menggunakan operator spreads
// yaitu ...
const mergedFoodDrinks = [...food, ...drinks];
console.log(mergedFoodDrinks);
console.log(mergedFoodDrinks.length);

// or 

const user = {
    name: "Royhan",
    age: 20,
};

const extedUser = {
    isAdmin: true,
    ...user,
};

console.log(extedUser);

 */

/**
 * REVISITING CONTROL STRUCTURES
 konsep dalam pemrograman yang melibatkan peninjauan kembali dan pemahaman mendalam 
 tentang struktur kontrol dalam sebuah program. Struktur kontrol adalah blok bangunan 
 dasar dari program yang memungkinkan pengembang untuk mengendalikan alur eksekusi 
 program berdasarkan kondisi tertentu atau pola tertentu.



 const password = prompt("Enter your password");

 if (password === "royhan") {
    console.log("Hello Royhan");
 } else {
  console.log("Password not define");
 }


const hobbies = [
  "sports",
  "cooking",
];

// melakukan perulangan untuk memanggil semua data array hobbies
for(const hobby of hobbies) {
    console.log(hobby);
}

// melakukan perulangan bintang
const i = 10;

for(let x = 1; x <= i; x++) {
  let bintang = '';
  for(let y = 1; y <= x; y++) {
    bintang += '*';
  }
  console.log(bintang);
}
 */
