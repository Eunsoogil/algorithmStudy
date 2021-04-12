/*
queues
FIFO : first in first out
가장 먼저 삽입된 자료가 가장 먼저 삭제

사용 : 
waiting line of online game etc
background tasks
uploading resources
printing / task processing
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

/*
big o notation
insertion - O(1)
removal - O(1)
searching - O(N)
access - O(N)


*/