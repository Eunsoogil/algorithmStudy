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

거의 정렬되어 있다면 O(N)도 가능
일반적으로 O(N2)
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


/*
selection sort
loop를 돌면서 가장 작은 것을 찾고 가장 앞으로 넘김
장점이 딱히 없다
O(N2)
*/

// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);

/*
insertion sort
loop를 돌면서 정렬해나간다 만약 새로운 데이터가 중간의 위치라면 중간에 집어넣는다
장점 : nearly sorted data의 경우 좋다 또한 만약 라이브로 계속 새로운 값이 추가되는 상황에서
정렬을 해야한다면 가장 적합할 수 있다. (왜냐면 새로운 값을 해당 위치에 집어넣으므로)

일반적으로 O(N2) nearly sorted : O(N)
*/


function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])


/*
bubble sort, insertion sort, selection sort가 기초적인 정렬이라면
아래부터는 intermediate sort
시간복잡도가 O(N logN)인 경우가 많다

merge sort
1. 배열을 모두 나눠서 배열 내에 0개 혹은 1개 원소만 남도록 한다
2. 합치면서 정렬
*/

// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([2,1,9,76,4])

// call stack을 보면 이해하기 쉽다
// 시간복잡도의 경우 항상 O(N log N)
// N logN인 이유 : 작은 배열로 나누는 과정은 O(logN), 비교하는 과정이 N


/*
Quick sort
1. loop를 돌때 현재 값보다 작으면 현재 값 인덱스 바로 앞에 두고 계속 loop를 돈다
2. 자신보다 작은 값만 정렬, 만약 현재 값이 가장 크다면 우측에 둔다
-> 이 과정은 현재값의 정확한 index 위치를 찾는것과 같다
*/

// pivot : 사전적정의는 어떤 알고리즘을 위한 선행적인 계산식
// 해당 pivot은 현재 값의 정확한 index 위치를 return
// First Version
function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])

//시간복잡도 : O(N logN), worst case는 모두 이미 정렬되어 있다면 O(N2)