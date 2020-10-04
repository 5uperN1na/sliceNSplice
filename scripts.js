//more slice
//it is immutable.  the original array can't be changed.  A copy is created.

let slice = ['p', 'a', 'u', 'l', 'a'];

let name = slice.slice(3, 4);

//"l"
console.log(name);

let middle = ['d', 'z', 'u', 'c', 'k'];

let m = middle.slice(1, 3);

//'z' 'u'
console.log(m);

//negative index slice
//starting point calculated from the end

let x = ['a', 'b', 'c', 'd'];

// let z = x.slice(-3);
// let z = x.slice(-2);
let z = x.slice(-1);

// 'b' 'c' 'd'
// 'c' 'd'
// 'd'
console.log(z);

let g = [1, 2, 3, 4];

let k = g.slice(-3, 2);

console.log(k);

//more splice
//it mutates the array

let splice = [9, 8, 7, 6, 5];
let s = splice.splice(2);

//7,6,5
console.log(s);

let a = [4, 3, 6, 2];
let b = a.splice(3);

console.log(b);


let o = [2, 3, 6, 9];

let p = o.splice(2, 1);
console.log(p);

let arr = [1, 2, 3, 4];
console.log(arr.length);
 

// for (let i = 0; i <= arr.length; i++) {
    
//     sum = sum + i;

// }

// console.log(sum);


