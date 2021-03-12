// 배열 2개를 받는 same이라는 함수를 만들고 배열 2개 index 순서와 상관없이 첫번째 배열의 값이 다른 배열의 값의 제곱과 같은지 판별
// same([1,2,3], [4,1,9]) //true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false

function same(list1, list2){
	if(list1.length !== list2.length) return false;
	let obj1 = {};
	let obj2 = {};
	for (let i of list1) {
		obj1[i] ? ++obj1[i] : obj1[i] = 1;
	}
	for (let i of list2) {
		obj2[i] ? ++obj2[i] : obj2[i] = 1;
	}
	for(let i in obj1){
		if(!(i ** 2 in obj2)) return false;
		if(obj2[i ** 2] !== obj1[i]) return false;
	}
	return true;
}
console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false
// anagrams
// 두 문자열 중 두번째 문자열이 첫번째 문자열의 anagram인지 비교
// anagram : 알파벳 위치를 변경하여 단어 만들기, cinema > iceman

// vaildAnagram('', '') // true
// vaildAnagram('aaz', 'zza') // false
// vaildAnagram('anagram', 'nagarma') // true

function vaildAnagram(str1, str2){
	if(str1.length !== str2.length) return false;
	let obj1 = {};
	let checkLetter = '';
	for (var i = 0; i < str1.length; i++) {
		checkLetter = str1[i];
		obj1[checkLetter] ? obj1[checkLetter]++ : obj1[checkLetter] = 1;
	}
	for (var i = 0; i < str2.length; i++) {
		checkLetter = str2[i];
		if(obj1[checkLetter] || obj1[checkLetter] !== 0){
			obj1[checkLetter]--;
		} else {
			return false;
		}
	}
	return true;
}

console.log(vaildAnagram('', '')) // true
console.log(vaildAnagram('aaz', 'zza')) // false
console.log(vaildAnagram('anagram', 'nagarma')) // true