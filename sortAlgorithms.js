/*
sorting은 자주 사용되는 알고리즘이며 각각 장단점이 있다
-> 정렬된 방식이 데이터마다 다르며 알고리즘 역시 달라 상황에 맞게 효율적인 접근을 하는 것이 중요

자바스크립트 built-in sorting -> .sort();
데이터를 unicode화하여 정렬
메소드 파라미터를 넘기는 것 가능
*/

function numberCompare(num1, num2) {
	return num1 - num2; // 순서 바꾸면 오름차순 -> 내림차순
}

console.log([6,4,15,10].sort(numberCompare)); // [4,6,10,15]

function compareBylen(str1, str2) {
	return str1.length - str2.length;
}

console.log(['steele', 'colt', 'data structure', 'algorithms'].sort(compareBylen))

/*
bubble sort

function swap(arr, idx1, idx2){
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}
*/

// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

//위 bubble sort의 단점 : 거의 정렬된 데이터 (nearly sorted)의 경우 필요없는 코드를 돈다

// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

// 이 방식은 swap이 일어나지 않으면 break;

// 시간복잡도 : 일반적으로 O(N2), nearly sorted data의 경우 O(N)