console.log('Gabriella Koos');
let myVariable = false;
if (myVariable === true) {
    console.log('The condition has been evaluated to true');
}

if (myVariable !== true) {
    console.log('The condition has been evaluated to true');
}

let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}

let numberList = 10;

for (let i = 1; i <= numberList; i++) {
    console.log(i);
}

let evenNumbers = 20;

for (let i = 0; i <= evenNumbers; i++) {
    if (i % 2 == 0) {
        console.log(i);
    } 
}

// for (let i = 0; i <= evenNumbers; i += 2) {
//      console.log(i);
//}
//
// i++  i = i + 1
// i = i + 2    i += 2

let printNumbersTill = n => {
    for(let i = 1; i<= n; i++) {
        console.log(i);
    }
}

// old version:
// function printNumbersTill(n) {
//     for(let i = 1; i<= n; i++) {
//         console.log(i);
//     }
// }

printNumbersTill(20);
printNumbersTill(15);

let getGreetingTo = name => {
    return `Hello, ${name}!`;
};

console.log(getGreetingTo('Mark'));

// let printValues = (array) => {
//     for (let i=0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// };
//
// printValues([0,3,6,7,9]);

// other solution:

let printValues = [0,3,6,7,9]

printValues.forEach(value => {
    console.log(value);
});
