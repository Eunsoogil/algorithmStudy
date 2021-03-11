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

O(1) > O(logN) > O(N) > O(N * logN) > O(N2) 순으로 효율이 좋다

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
		char = char.toLowerCase();
		if(/[a-z0-9]/.test(char)){
		// regular expression은 브라우저마다 성능이 다르다
		// charCodeAt으로 바꾸면 더 빠름
			obj[char] = ++obj[char] || 1; // 삼항연산자이므로 더 빠름
		}
	}
	return obj;
}



