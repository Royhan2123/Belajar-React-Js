
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
 * 
 * 
 */

const greet = (userName,message) => {
    return userName + message;
}

const user = {
    name: 'Rizki',
    age: 15,

    greet() {
        console.log(this.name);
    }
};

const people = {
    name: "Royhan",
    age: 20,
    jurusan: "Teknik Informatika"
}

console.log(people);
console.log(people.name);
console.log(people.jurusan);

console.log(user);
console.log(user.age);

const userName = "Max";
const userAge = 35;