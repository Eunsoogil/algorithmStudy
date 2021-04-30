/*
tree의 경우 참조가 분할되어 있기 때문에 검색이 어렵다
만약 정렬이 안된 상황이면 더 어렵다

tree검색 일반적인 방식
- breadth-first search(BFS) : 계층별 검색, 가로로 위에서 아래로
- depth-first search(DFS) : 세로형 검색


      1
  2       3
4   5   6   7


BFS : root -> left -> right(계층 검색)
  => 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

DFS preorder : root -> left -> right
  => 1 -> 2 -> 4 -> 5 -> 3 -> 6 -> 7

DFS inorder : left -> root -> right
  => 4 -> 2 -> 5 -> 1 -> 3 -> 6 -> 7

DFS postorder : left -> right -> root
  => 4 -> 5 -> 2 -> 6 -> 7 -> 3 -> 1

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
    insert(value){
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
    /*

      1
  2       3
4   5   6   7


BFS : root -> left -> right(계층 검색)
  => 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

    */

    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }

    /*
    
      1
  2       3
4   5   6   7


DFS preorder : root -> left -> right
  => 1 -> 2 -> 4 -> 5 -> 3 -> 6 -> 7

    */

    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    /*
    
      1
  2       3
4   5   6   7


DFS postorder : left -> right -> root
  => 4 -> 5 -> 2 -> 6 -> 7 -> 3 -> 1

    */

    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    /*
    
      1
  2       3
4   5   6   7


DFS inorder : left -> root -> right
  => 4 -> 2 -> 5 -> 1 -> 3 -> 6 -> 7

    */

    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();

/*
BFS나 DFS는 시간복잡도는 같다
차이점은 공간복잡도!

DFS를 써야할 경우
만약 깊이가 깊고 모든 노드가 꽉 차있다면 BFS의 경우 공간복잡도를 크게 낭비한다
  => 좌측 우측을 저장해 나가는 꼴로 진행되므로

반면, 이경우 DFS라면 깊이를 먼저 찾고 없으면 다음 형제를 찾으므로 공간복잡도 낭비를 줄인다

BFS를 써야하는 경우
DFS의 경우 좌 우측 node를 저장한다 하지만 좌측이나 우측 중 하나가 없이 깊은 노드라면

*/




