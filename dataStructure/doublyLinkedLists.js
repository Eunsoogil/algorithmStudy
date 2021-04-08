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

    //practice
    // shift(){
    // 	if(this.length === 0) return undefined;
    // 	var oldHead = this.head;
    // 	if(this.length === 1) {
    //         this.head = null;
    //         this.tail = null;    		
    // 	} else {
    // 		this.head = this.head.next;
    // 		this.head.prev = null;
    // 		oldHead.next = null;
    // 	}
    // 	this.length--;
    // 	return oldHead;
    // }

    //solution
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    //practice
    unshift(val){
    	var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
        	this.head.prev = newNode;
        	newNode.next = this.head;
        	this.head = newNode;
        }
        this.length++;
        return this;
    }

    //solution
    // unshift(val){
    //     var newNode = new Node(val);
    //     if(this.length === 0) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //     } else {
    //         this.head.prev = newNode;
    //         newNode.next = this.head;
    //         this.head = newNode;
    //     }
    //     this.length++;
    //     return this;
    // }

    //practice
    // get(idx){
    // 	if(idx < 0 || idx >= this.length) return null;
    // 	var half = Math.floor(this.length / 2);
    // 	if(idx < half){
    // 		var current = this.head;
    // 		for(var i = 0; i < idx; i++){
    // 			current = current.next;
    // 		}
    // 	} else {
    // 		var current = this.tail;
    // 		for(var i = this.length; i > this.length - idx; i--){
    // 			current = current.next;
    // 		}
    // 	}
    // 	return current;
    // }

    //solution
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    //practice
    set(idx, val){
        var current = this.get(idx);
        if(current != null){
            current.val = val;
            return true;
        }
        return false;
    }

    //solution
    // set(index, val){
    //     var foundNode = this.get(index);
    //     if(foundNode != null){
    //         foundNode.val = val;
    //         return true;
    //     }
    //     return false;
    // }

    //practice
    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return !!this.unshift(val);
        if(idx === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var prevNode = this.get(idx - 1);
        var nextNode = prevNode.next;
        
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.length++;
        return true;
    }

    //solution
    // insert(index, val){
    //     if(index < 0 || index > this.length) return false;
    //     if(index === 0) return !!this.unshift(val);
    //     if(index === this.length) return !!this.push(val);

    //     var newNode = new Node(val);
    //     var beforeNode = this.get(index-1);
    //     var afterNode = beforeNode.next;
        
    //     beforeNode.next = newNode, newNode.prev = beforeNode;
    //     newNode.next = afterNode, afterNode.prev = newNode;
    //     this.length++;
    //     return true;
    // }

    //practice
    remove(idx){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();

        var current = this.get(idx);
        var prevNode = current.prev;
        var nextNode = current.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        current.next = null;
        current.prev = null;

        this.length--;
        return current;
    }

	//practice - reverse
}

var list = new DoublyLinkedList();
list.push(1).push(2).push(3);
// console.log(list)
// console.log(list.pop())
// console.log(list)
list.insert(2, 9);
console.log(list);


/*
big O
insertion - O(1)
removal - O(1)
searching - O(N)
access - O(N)

single linked list보다 prevNode가 있기 때문에 검색에 절반의 시간이 소요된다
단점은 메모리
*/


