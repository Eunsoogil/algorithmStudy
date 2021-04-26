/*
trees

부모 자식 관계의 node들로 구성되어 있다
lists - linear
trees - non-linear

자식들과의 관계가 생성되면 tree가 아님
root는 1개여야 tree

leaf - 자식이 없는 node
edge - 노드와 노드 사이의 관계

사용
HTML DOM
network routing
abstract syntax tree
AI
folders in OS
computer file systems
JSON

binary trees
자식 노드가 2개씩

binary search trees
자식들이 정렬되어 있음
왼쪽은 부모보다 작고 오른쪽은 부모보다 크다

     10
  5       13
2   7   11  16

trees > binary trees > binary search trees

*/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }    	
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

/*
big O notation
insertion - O(logN)
searching - O(logN)

하지만 노드가 한쪽으로 늘어날수록 느려질 수 있다

예시

     3
       17
          19
             32
                34
                   63
                      86
                         91

위 예시는 BST가 맞지만 상당히 느려질 수 있다
따라서 이미 정렬된 값들을 binary search tree에 사용하기에는 적합하지 않다
*/