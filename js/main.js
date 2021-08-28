/*
    let firstname = 'John';
    let lastname = 'Doe';
    let age = 34;
    let description = 'I love playing football and I a love Javascript';

    console.log(
    'My name is ' + firstname + ' ' + lastname + ' I am ' + age + ' years old'
    );

    //string interpolation or template literals
    console.log(`My name is ${firstname} ${lastname} I am ${age} years old`);
    
    let numberOne = 10;
    let numberTwo = 5;
    let numberThree = 50;
    
    console.log(numberThree / numberTwo);
    console.log(numberThree % numberTwo);
    console.log(3 % 2);
    console.log(++numberOne);
    console.log(numberThree++);
    console.log(numberThree);
    numberTwo = numberTwo + 10;
numberTwo += 10;

// console.log(numberTwo < numberThree);
// console.log(numberTwo >= numberTwo);
console.log(1 == '1');
console.log(1 === '1');
console.log(1 != '1');
console.log(1 !== '1');
// let numberFour = prompt('input a number');
// console.log(typeof numberFour);
// console.log(numberFour);
// console.log(numberFour * 1);
// console.log(parseInt(numberFour));
// console.log(Number(numberFour));
*/

console.log('=========ARRAYS=======');
let studentOne = 'Adaeze';
let studentTwo = 'Toluwani';
let studentThree = 'Ismail';

let students = ['Adaeze', 'Toluwani', 'Ismail', 'Lanre'];
let arr = [true, false, undefined, null, 10, 'string'];
let cars = ['Rolls Royce', 'Mercedes Benz', 'Bentley', 'Masseratti'];
cars[4] = 'Range Rover';
cars[2] = 'Tesla';
console.log(cars);

//array mutation
let food = [];
food[0] = 'Egusi';
food[1] = 'Ebirikpo';
food[2] = 'Afang';
food[3] = 'Ofor';
food[4] = 'Okra';

console.log(food);
food.shift();
console.log(food);
food.pop();
console.log(food);
food.push('beans');
console.log(food);
food.unshift('rice');
console.log(food);
