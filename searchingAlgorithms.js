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