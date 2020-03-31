const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rest_training',
    password: 'postgres',
    port: 5432,
})

// function test() {
//     if(true) {
//         const age = 27;
//         if(true) {
//             var fname = "Jane";
//         }
//         let lname = "Panty";
//     }
//     console.log(fname);
//     console.log(lname);
//     console.log(age);
    
// }

// test();

// function tag() {
//     let a = 3;
//     let b = 4;
//     console.log(`The sum of a and b is ${a+b}`);
// }

// tag();


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHello() {
//         document.querySelector("h1")
//         .addEventListener("click", () => {
//             console.log(`Hello from ${this.name}`);
//         })
//     }
// }


// let samantha = new Person("Samantha");
// samantha.sayHello();
// console.log(`${samantha.name} is ${samantha.age} years old`);

function logUsers() {
    getUsers().then(val => {
        for(let user of val) {
            console.log(`${user.name} ${user.surname} is ${user.age} years old.`);
        }
    }).catch(error =>{
        console.log(`Error: ${error}`);
    })
}

function getUsers() {
    return new Promise((resolve, reject) => {
        pool.query("select * from user_table", (error, result) => {
            if(error) {
                console.log(error);
                reject(error);
            } else {
                resolve(result.rows);
            }
        })
    });
}

logUsers();