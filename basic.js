/*
big O notation

시간복잡도
function add1(n){
	return n * (n + 1) / 2;
}

function add2(n){
	let result = 0;
	for(let i = 1; i <= n; i++){
		result += i;
	}
	return result;
}

두 식을 비교하면 add1의 경우 n의 수가 1이든 100000000이든 거의 일정함을 볼 수 있다.
add2의 경우 n의 값이 늘어나면 늘어날수록 실행시간도 일정하게 늘어난다 (y=x꼴)

add1의 operation 숫자는 3개
add2의 operation 숫자는 7개(assign, comparison 포함)

하지만 big-O notation에서는 이는 무시한다
실제 시간 및 메모리를 논하지 않고 복잡도를 사용하는 이유
기기 성능에 의한 차이가 크다

add1 : f(n) = 1 => O(1)
add2 : f(n) = n => O(n)

function allPair(n){
	for(let i = 0; i < n; i++){
		for(let j = 0; j < n; j++){
			console.log(i, j);
		}	
	}
}

allPair : f(n) = n * n => O(n * n)

공간복잡도
위와 동일하다 n이 늘어날수록 메모리를 얼마나 사용하냐의 문제

big O notation에서 log는 1, n, n2을 논하기 때문에 상용로그가 아니고 log2(하단)이다

O(1) < O(logN) < O(N) < O(N * logN) < O(N2)

JS object
insertion - O(1)
removal - O(1)
searching - O(N)
access - O(1)

object method
Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)

JS Array
insertion - 뒤에 넣는 경우 O(1)
	첫 부분에 넣으면 index값을 바꿔야한다 따라서 느리다(삭제도 같음)
removal - 뒤에서 삭제하는 경우 O(1)
searching - O(N)
access - O(1)

array method
push - O(1)
pop - O(1)
shift - O(N)
unshift - O(N)
concat - O(N)
slice - O(N)
splice - O(N)
sort - O(N * log N)
forEach/map/filter/reduce/etc - O(N)

문제 접근법
1. understand the problem

- 문제를 내가 남에게 설명할 수 있는가?

- input값이 어떤 값인가?
ex) a+b를 구현하는 문제라면, input값이 너무 크면? int? float? string? array?

- 어떤 output값이 나와야 하는가?
ex) int? float? string? array?

- 문제를 풀기에 input, output 설정이 충분한가?
> 문제에 해당 요소들이 명시되어 있지 않으면 확인

- 중요한 변수는 어떻게 이름 지을것인가


2. concrete example

- 쉬운 예시부터

- 복잡한 예시

- empty inputs

- invalid inputs


3. break it down

- 주석을 남겨서 전체적인 그림을 그려보고 해당 부분들을 설명한다(인터뷰시 중요)


4. solve or simplify

5. look back and refactor

- 다른 방식은 없는가?

- 한눈에 이해가 가능한가?

- 다른 문제에 적용 가능한가?

- 성능을 올릴 여지는 없는가?

- 다른 사람은 어떻게 풀었는가

*/

//리팩토링
// function charCount(str) {
// 	var obj = {};
// 	for (var i = 0; i < str.length; i++) {
// 		var char = str[i].toLowerCase();
// 		if(/[a-z0-9]/.test(char)){
// 			if(obj[char] > 0){
// 				obj[char]++;
// 			} else {
// 				obj[char] = 1;
// 			}
// 		}
// 	}
// 	return obj;
// }

function charCount(str) {
	var obj = {};
	for (var char of str) { // for문을 바꿈으로 공간복잡도 줄임
		if(isAlphaNumeric(char)){
		// regular expression은 브라우저마다 성능이 다르다
		// charCodeAt으로 바꾸면 더 빠름, 물론 그렇다고 외울 수는 없고 변경 가능하다는 정도는 알아야함
			char = char.toLowerCase(); // if문에서 false면 lowercase할 필요 없음
			obj[char] = ++obj[char] || 1; // 가독성
		}
	}
	return obj;
}

function isAlphaNumeric(char){
	var code = char.charCodeAt(0);
	if(!(code > 47 && code < 58) && // numeric 0 - 9
		!(code > 64 && code < 91) && // upper alphabet (A-Z)
		!(code > 96 && code < 123) // lower alphabet (a-z)
		){
		return false;
	}
	return true;
}

console.log(charCount("qjnwidoqjwiod"))
console.log(charCount("hello  hi!!! WORLD!@#"))











/*
problem solving pattern
아래 명칭들은 offical한 단어는 아님

1. frequency counters
얼마나 자주 있는지 비교하거나 세는 문제들
피해야할 상황 nested loop

example
배열 2개를 받는 same이라는 함수를 만들고 배열 2개 index 순서와 상관없이 첫번째 배열의 값이 다른 배열의 값의 제곱과 같은지 판별
same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false
*/

//피해야할 솔루션 코드 예시
function same1(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){ // O(N)
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // O(N)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1) // O(N)
    } // nested loop(O(N2))
    return true;
}

console.log(same1([1,2,3,2], [9,1,4,4]))

//솔루션 코드 리팩토링
function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){ // O(N)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){ // O(N)
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){ // O(N)
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
// nested loop 보다 loop가 여러개인것이 당연히 낫다
// O(N2) > O(3N)

console.log(same2([1,2,3,2], [9,1,4,4]))
console.log(same2([1,2,3,2,5], [9,1,4,4,11]))

/*
practice

anagrams
두 문자열 중 두번째 문자열이 첫번째 문자열의 anagram인지 비교
anagram : 알파벳 위치를 변경하여 단어 만들기, cinema > iceman

vaildAnagram('', '') // true
vaildAnagram('aaz', 'zza') // false
vaildAnagram('anagram', 'nagarma') // true
*/

function vaildAnagram(str1, str2){
	//길이 다르면 false 리턴
	if(str1.length !== str2.length) return false;

	//두 문자열 object 형식으로 바꾸기
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
	//object 비교
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        } 
    }
    return true;
}

console.log(vaildAnagram('', ''))
console.log(vaildAnagram('aaz', 'zza'))
console.log(vaildAnagram('anagram', 'nagarma'))

//better solution
function validAnagramBetter(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagramBetter('anagrams', 'nagaramm'))