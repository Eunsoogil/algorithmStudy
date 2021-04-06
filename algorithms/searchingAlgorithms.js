/*
linear search
처음부터 끝까지 있는지 비교하기
O(N)
자바스크립트에서 사용
indexOf
includes
find
findindex
*/

/*
Linear Search Exercise
Write a function called linearSearch which accepts an array and a value,
and returns the index at which the value exists.
If the value does not exist in the array, return -1.
Don't use indexOf to implement this function!

examples
linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9,8,7,6,5,4,3,2,1,0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5],6) // -1
*/

function linearSearch(arr, target){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === target) return i;
	}
	return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 4)) // 5
console.log(linearSearch([100], 100)) // 0
console.log(linearSearch([1,2,3,4,5],6)) // -1

/*
binary search
계속 절반씩 나눠가며 검색, 정렬된 상황에서만 사용가능!
O(logN)

*/

/*
Binary Search Exercise
Write a function called binarySearch which accepts a sorted array
and a value and returns the index at which the value exists.
Otherwise, return -1. 

This algorithm should be more efficient than linearSearch - you can read how to implement it here
- https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

examples
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95) // 10
*/

function binarySearch(arr, target){
	let leftIndex = 0;
	let left = arr[leftIndex];
	let rightIndex = arr.length - 1;
	let right = arr[rightIndex];
	let halfIndex = Math.round((rightIndex - leftIndex) / 2);
	let half = arr[halfIndex];
	while(true){
		if(left === target) return leftIndex;
		if(right === target) return rightIndex;
		if(target === half) return halfIndex;
		if(rightIndex - halfIndex === 1 || halfIndex - leftIndex === 1) return -1;

		if(target < half){
			right = half;
			rightIndex = halfIndex;
			halfIndex = Math.round((rightIndex - halfIndex) / 2);
			half = arr[halfIndex];
		} else {
			left = half;
			leftIndex = halfIndex;
			halfIndex = Math.round((rightIndex + halfIndex) / 2);
			half = arr[halfIndex];
		}
	}
}

console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5,6],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95)) // 16


// Original Solution
function binarySearch1(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch2(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 103))


/*
naive string search
O(N * M)
그냥 앞에서부터 찾아가며 검색, 앞의 한 글자가 맞으면 다음글자도 맞는지 확인
*/
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"))

/*
KMP algorithm
Knuth-Morris-Pratt string search algorithm

*/

function makeTable(str) {
  
    
    var table = new Array(str.length);
    var maxPrefix = 0;
    
    table[0] = 0;
  
    
    for (var i = 1; i < str.length; i++) {
      while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
        
        maxPrefix = table[maxPrefix - 1];
      }
      
      if (str.charAt(maxPrefix) === str.charAt(i)) {
        maxPrefix++;
      }
      table[i] = maxPrefix;
    }
    return table;
  }
   
    var prefixes = makeTable(word);
    var matches = [];
    
    
    var j = 0;
    var i = 0;
    while (i < str.length) {
      
      if (str.charAt(i) === word.charAt(j)) {
        i++;
        j++;
      }
      
      if (j === word.length) {
        matches.push(i-j);
        
        j = prefixes[j-1];
      }
      
      else if (str.charAt(i) !== word.charAt(j)) {
          
          if (j !== 0) {
              j = prefixes[j-1];
          } else {
              
              i++;
          }
      }
    }
  
    return matches;
  }
console.log(kmpMatching("it implies that it is very important","impo")) // 27