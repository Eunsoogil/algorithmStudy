/*
array와 비교

리스트
index가 없다
포인터를 이용해 다음 노드를 가르킨다
random access는 불가능

배열
index가 있다
insertion and deletion은 비효율적이다
특정 index로의 접근이 빠르다

singly linked list
head, tail, length로 되어 있으며 head에서 다음 node로 포인터를 통해 tail을 가르킨다
*/

class Node {
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

let first = new Node('1');
first.next = new Node('2');
first.next.next = new Node('3');
first.next.next.next = new Node('4');
first.next.next.next.next = new Node('5');

//practice
/*
class SinglyLinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val){
		if(this.head === null){
			this.head = val;
		} else {
			this.tail = new SinglyLinkedList();
			this.tail.push(val);
		}
	}
}

let list = new SinglyLinkedList();
list.push('1')
list.push('2')
console.log(list);
*/

//solution
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // practice
    // pop(){
    // 	if(this.head === null) return undefined;
    // 	var current = this.head;
    // 	var previous = null;
    // 	while(current.next){
    // 		previous = current;
    // 		current = current.next;
    // 	}
    // 	var returnValue = current.val;
    // 	current = null;
    // 	if(previous){
    // 		this.tail = previous;
    //         this.tail.next = null;
    //         this.length--;	
    // 	} else {
	   //      this.head = null;
	   //      this.tail = null;
	   //      this.length = 0;
    // 	}
    // 	return returnValue;
    // }

    //solution
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    //practice
    // shift(){
    //     if(!this.head) return undefined;
    //     var current = this.head;
    //     this.head = current.next;
    //     this.length--;
    //     return current;
    // }

    //solution
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    //practice
    // unshift(val){
    // 	var newNode = new Node(val);
    //     if(!this.head){
    //         this.head = newNode;
    //         this.tail = this.head;
    //     } else {
    //     	newNode.next = this.head;
    //     	this.head = newNode;
    //     	this.length++;
    //     }
    // }

    //solution
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
list.push('1').push('2').push('3');
list.unshift('9');
console.log(list)
let list1 = new SinglyLinkedList();
list1.push('9').push('1').push('2').push('3');
console.log(list1)
