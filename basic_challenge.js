/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)
sample :
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578,5879385) // true
sameFrequency(22,222) // false
*/
function sameFrequency(num1, num2){
	// 문자열로 변환
	let str1 = String(num1);
	let str2 = String(num2);

	// 객체에 담고 카운팅
	let obj = {};
	let key;
	for(key of str1){
		obj[key] ? obj[key]++ : obj[key] = 1;
	}

	// 객체와 비교하며 없으면 false, 있으면 카운팅 수 줄이기
	for(key of str2){
		if(!obj[key]){
			return false;
		} else {
			obj[key]--;
		}
	}
	return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578,5879385)) // true
console.log(sameFrequency(22,222)) // false

/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates  which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a', 'b', 'c', 'd') // true


restrictions :
time  - O(n)
space - O(n)

Bonus :
Time - O(n logn)
space - O(1)
*/

function areThereDuplicates(...list){ // 모든 변수 받기
	// object로 전환하는 과정에서 value가 하나라도 2 이상이면 return true
	let obj = {};
	for(let key of list){
		if(!obj[key]){
			obj[key] = 1;
		} else if(obj[key] === 1){
			return true
		} else {
			obj[key]++;
		}
	}
	return false
}

console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'd')) // true

/*
Multiple Pointers - averagePair
Write a function called averagePair.
Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)

Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6],4.1) // false
averagePair([],4) // false
*/
function averagePair(list, num){
	// list가 2개 보다 작으면 return false
	if(list.length < 2 || !list) return false;

	// list에서 중간 지점 (2개 예상)을 먼저 찾음
	// num과 같은 값이 list에 있는 경우는? -> 인덱스 -1 값이 있는지 체크, 없으면 return false
	let up, down, i;
	for(i = 0; i < list.length; i++){
		if(list[i] >= num){
			up = i;
			break;
		}
	}
	if(!list[up - 1]) return false;
	down = up - 1;

	// 2개의 평균을 비교하고 값이 num보다 크면 인덱스 -1 작으면 인덱스 +1 같으면 return true
	// 값이 작아지다가 커지거나 그 반대가 되면 return false
	let middle;
	let length = list.length;
	
	let goUp = false;
	let goDown = false;
	while(down > 0 || up < length - 1){
		middle = (list[down] + list[up]) / 2;
		if(middle === num){
			return true;
		} else if(middle > num){
			if(goUp) return false;
			goDown = true;
			down--;
		} else {
			if(goDown) return false;
			goUp = true;
			up++;
		}
	}
	return false;
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6],4.1)) // false
console.log(averagePair([],4)) // false

/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings
and checks whether the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear somewhere in the second string,
without their order changing.

Examples: 
isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'acb') // false

Your solution MUST have AT LEAST the following complexities: 
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

function isSubsequence(str1, str2){
// while로 앞에서 부터 찾고 만약 첫번째 단어 index가 length -1
//에 도달하지 못하면 return false
	let i = 0;
	let j = 0;
	while(j < str2.length){
		if(str1[i] === str2[j]){
			i++;
			j++;
		} else {
			j++;
		}
	}
	if(i <= str1.length - 1){
		return false;
	} else {
		return true;
	}
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'acb')) // false

/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function. 
Note that a subarray must consist of consecutive  elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Examples: 
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
maxSubarraySum([2,3], 3) // null


Constraints:
Time Complexity - O(N)
Space Complexity - O(1)
*/
function maxSubarraySum(arr, num){
	// array length가 num보다 작으면 null return
	if(arr.length < num) return null;

	// 결과가 배열순이므로 while로 돌면서 값을 더해나가고(더할때 가장 작은 index를 빼고 가장 큰 index더하기)
	// 가장 큰 값 return
	let i;
	let sum = 0;
	let temp = 0;
	for (i = 0; i < num; i++) {
		temp += arr[i];
	}
	i = 0;
	while(i < arr.length - num + 1){
		if(temp > sum) sum = temp;
		temp = temp + arr[i + num] - arr[i];
		i++;
	}	
	return sum;
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null
/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters
- an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray
of which the sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.

examples
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> [5,4]
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) // 5
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0

Time Complexity - O(n)
Space Complexity - O(1)
*/
function minSubArrayLen(arr, num){
	let start = 0;
	let sum = 0;
	let end = 0;
	let minlen = Infinity;

	while(arr.length > start){
		if(sum < num && end < arr.length){
			sum += arr[end];
			end++;
		} else if(sum >= num){
			minlen = Math.min(minlen, end - start);
			sum -= arr[start];
			start++;
		} else {
			break;
		}
	}

	return minlen === Infinity ? 0 : minlen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> [5,4]
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)) // 5
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) // 0
/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string 
and returns the length of the longest substring with all distinct characters.

examples
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8


Time Complexity - O(n)
*/

function findLongestSubstring(str){
	// 배열로 전환한다음 object에 넣어가며 key들 중 value가 1이상이되면 이전 인덱스 return
	if(str.length === 0) return 0;
	let key = '';
	let obj = {};
	let start = 0;
	let end = 0;
	let result = 0;

	while(start < str.length){
		if(){

		}
	}
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8