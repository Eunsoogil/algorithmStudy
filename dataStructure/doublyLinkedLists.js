/*
Doubly Linked Lists
singly linked lists : head -> node ... node -> tail
doubly linked lists : <- head <-> node <-> ... <-> node <-> tail ->

장점 : singly linked list보다 뒤에서 접근이 가능하기때문에 접근 방식이 더 개선되었다
단점 : 메모리
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //practice
    // push(val){
    // 	var newNode = new Node(val);
    // 	if(!this.head){
    // 		this.head = newNode;
    // 		this.tail = newNode;
    // 	} else {
    // 		this.tail.next = newNode;
    // 		newNode.prev = this.tail;
    // 		this.tail = newNode;
    // 	}
    // 	this.length++;
    // 	return this;
    // }

    //solution
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //practice
    // pop(){
    // 	if(this.length === 0) return undefined;
    // 	var val = this.tail.val;
    // 	if(this.length === 1){
    // 		this.head = null;
    // 		this.tail = null;
    // 	} else {
    // 		this.tail.prev.next = null;
    // 		this.tail = this.tail.prev;
    // 	}
    // 	this.length--;
    // 	return val;
    // }

    //solution
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
}

var list = new DoublyLinkedList();
list.push(1).push(2).push(3);
console.log(list)
console.log(list.pop())
console.log(list)