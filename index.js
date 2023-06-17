// Array From method

console.log(Array.from('Hello')) // convert string to array
// [ 'H', 'e', 'l', 'l', 'o' ]

let set = new Set([1,2,3]); 
console.log(Array.from(set)); // set to array [ 1, 2, 3 ]

const arr = [1,2,3];
console.log(Array.from(arr, it=>it*2)); // [ 2, 4, 6 ]

console.log(Array.from({length:5}, (it,i)=>i*2)); // [ 0, 2, 4, 6, 8 ] {length of anarray} (iterator, index)


// delete method

var employee = {
  company: "xyz",
  name: "abc",
}
var chars = ['a', 'b', 'c', 'd']

delete employee.company;
delete employee.name;
console.log(employee); // {}

delete chars[2];
console.log(chars); // [ 'a', 'b', <1 empty item>, 'd' ] deleted at index 2

// delete only works on own property

Object.prototype.age = 20; // defined at wondow
console.log(employee.age) // output 20

// but but 
delete employee.age
console.log(employee.age); // still 20 delete not work on inheritance
