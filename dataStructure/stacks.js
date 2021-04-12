/*
stacks
LIFO : last in first out
call stack : stacks

사용 : 함수를 관리(call stack)
undo / redo
routing (history object)

이미 built-in array로 구현된 것이나 마찬가지
하지만 first out시 index를 다시 작업해야하므로 효율이 좋지 않다
singly linked list를 사용
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}