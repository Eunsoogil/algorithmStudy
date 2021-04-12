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
    	
    }
}