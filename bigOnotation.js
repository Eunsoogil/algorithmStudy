/*
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

*/