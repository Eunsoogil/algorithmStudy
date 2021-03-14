/*
recursion? 자기 자신을 호출하는 프로세스(혹은 함수)

recursion 사용 이유 :
	-> 이미 사용되고 있고 깊은 이해를 위해 필요
		- JSON.parse / JSON.stringify
		- document.getElementById and DOM traversal algotithms
		- Object traversal
		- complex data structures

call stack
- recursion은 stack data structure
- 함수가 호출될때마다 stack 최상단에 자리(pushed)
- 함수가 끝나면 (return) 컴파일러가 제거한다(pop)
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
