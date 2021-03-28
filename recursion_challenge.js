/*
power

Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow() 
- do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num, times){
    if(times === 0) return 1;
    return num * power(num, times - 1)
}


 console.log(power(2,0)) // 1
 console.log(power(2,2)) // 4
 console.log(power(2,4)) // 16

/*
factorial

Write a function factorial which accepts a number and returns the factorial of that number.
A factorial is the product of an integer and all the integers below it;
e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
factorial zero (0!) is always 1.
*/
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    if(num <= 1) return 1;
    return num * factorial(num - 1);
}

 console.log(factorial(1)) // 1
 console.log(factorial(2)) // 2
 console.log(factorial(4)) // 24
 console.log(factorial(7)) // 5040



/*
productOfArray

Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


function productOfArray(arr){
    if(arr.length === 1) return arr[0];
    return arr.pop() * productOfArray(arr);
}
 console.log(productOfArray([1,2,3])) // 6
 console.log(productOfArray([1,2,3,10])) // 60


/*
recursiveRange

Write a function called recursiveRange which accepts a number and 
adds up all the numbers from 0 to the number passed to the function 

*/
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange(num){
    if(num === 1) return 1;
    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 


/*
fib

Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
and where every number thereafter is equal to the sum of the previous two numbers.
*/
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(cnt){
    if(cnt <= 2) return 1;
    return fib(cnt - 2) + fib(cnt - 1);
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465


/*
reverse

Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/
function reverse(str){
    let length = str.length;
    if(length === 1) return str[0];
    return str[length - 1] + reverse(str.substr(0, length - 1))
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

/*
isPalindrome

Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
(reads the same forward and backward). Otherwise it returns false.
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    let length = str.length;
    if(length === 1) return true;
    if(length === 2 && str[0] === str[1]) return true;
    if(str[0] === str[length - 1]) return isPalindrome(str.substr(1, length - 2))
    return false;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false


/*
someRecursive

Write a recursive function called someRecursive which accepts an array and a callback.
The function returns true if a single value in the array returns true when passed to the callback.
Otherwise it returns false.
*/

// SAMPLE INPUT / OUTPUT
 const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, fn){
    if(arr.length === 0) return false;
    if(fn(arr.pop())) return true;
    if(someRecursive(arr, fn)) return true;
    return false;
}

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false