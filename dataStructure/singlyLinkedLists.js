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

    //practice
    get(idx){
    	if(idx < 0 || idx >= this.length) return null;
    	var cnt = 0;
    	var current = this.head;
    	while(cnt !== idx){
    		current = current.next;
    		cnt++;
    	}
    	return current;
    }

    //solution
    // get(index){
    //     if(index < 0 || index >= this.length) return null;
    //     var counter = 0;
    //     var current = this.head;
    //     while(counter !== index){
    //         current = current.next;
    //         counter++;
    //     }
    //     return current;
    // }

    //practice
    // set(idx, val){
    // 	var current = this.get(idx);
    // 	if(!current){
    // 		return false;
    // 	} else {
    // 		var newNode = new Node(val);
    // 		newNode.next = current.next;
    // 		var previous = this.get(idx-1);
    // 		if(!previous){
    // 			this.head.next = newNode;
    // 		} else {
    // 			previous.next = newNode;
    // 		}
    // 		return true;
    // 	}
    // }

    //solution...
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //practice
	// insert(idx, val){
	// 	if(idx < 0 || idx >= this.length) return false;
	// 	if(idx === this.length){
	// 		this.push(val);
	// 	} else if(idx === 0){
	// 		this.unshift(val);
	// 	} else {
	// 		var current = this.get(idx);
	// 		var newNode = new Node(val);
	// 		newNode.next = current;
	// 		var previous = this.get(idx-1);
	// 		previous.next = newNode;
	// 		this.length++;
	// 	}
	// 	return true;
	// }

    //solution
    // !!object => true
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    //practice
    remove(idx){
        if(idx < 0 || idx > this.length) return undefined;
        if(idx === this.length - 1) return this.pop(idx);
        if(idx === 0) return this.shift(idx);

        var current = this.get(idx - 1);
        var target = current.next;
        current.next = target.next;
        this.length--;
        return target;
    }

    //solution
    // remove(index){
    //     if(index < 0 || index >= this.length) return undefined;
    //     if(index === 0) return this.shift();
    //     if(index === this.length - 1) return this.pop();
    //     var previousNode = this.get(index - 1);
    //     var removed = previousNode.next;
    //     previousNode.next = removed.next;
    //     this.length--;
    //     return removed;
    // }

    //practice
    // reverse(){
    // 	var prev;
    // 	var next;
    // 	var node = this.head;
    // 	this.head = this.tail;
    // 	this.tail = node;
    // 	while(node.next){
    // 		next = node.next;
    // 		prev = node;
    // 		node.next = prev;
    // 		node = next;
    // 	}
    // }
    //solution
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }

    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();
list.push('1').push('2').push('3').push('4');
list.reverse();
let list1 = new SinglyLinkedList();
list1.push('4').push('3').push('2').push('1');
console.log(list);
console.log(list1)

/*
big O notation of Singly linked lists
insertion - O(1)
removal - O(1) ~ O(N)
searching - O(N)
Access - O(N)

array
insertion - O(N)
removal - O(1) ~ O(N)
searching - O(N)
Access - O(1)
*/