/*
recursion? 자기 자신을 호출하는 프로세스(혹은 함수)

recursion 사용 이유 :
	-> 이미 사용되고 있고 깊은 이해를 위해 필요
		- JSON.parse / JSON.stringify
		- document.getElementById and DOM traversal algotithms
		- Object traversal
		- complex data structures
	-> 코드를 더 짧게하고 싶을때 (기본적으로 recursion이 시간복잡도가 더 길다)

call stack
- recursion은 stack data structure
- 함수가 호출될때마다 stack 최상단에 자리(pushed)
- 함수가 끝나면 (return) 컴파일러가 제거한다(pop)

recursion의 2가지 요소
- base case : 끝났을때
- different input

코드 작성시 주의점
- base case가 있는지
- base case가 있어도 return을 까먹거나 잘못된 걸 return할때
=> 두 경우 stack overflow
*/

// call stack example
// 해당 코드를 크롬 콘솔의 call stack에서 디버깅하면서 보면 이해가 편함
function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()

// Recursive Version
function countDown(num){
    if(num <= 0) { // base case
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num); // different input
}

// Iterative Version
// function countDown(num){
//     for(var i = num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("All done!")
// }

countDown(3)

function sumRange(num){
   if(num === 1) return 1; // base case
   return num + sumRange(num-1); // different input
}

sumRange(4)

// Iterative Version
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

// Recursive Version
function factorial(num){
    if(num === 1) return 1; // base case
    return num * factorial(num-1); // different input
}

function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

//different way
// function collectOddValues(arr){
//     let newArr = [];
    
//     if(arr.length === 0) {
//         return newArr;
//     }
        
//     if(arr[0] % 2 !== 0){
//         newArr.push(arr[0]);
//     }
        
//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }

// collectOddValues([1,2,3,4,5])

collectOddValues([1,2,3,4,5,6,7,8,9])