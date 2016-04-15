/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//function Node(val){
//  this.value = val;
//  this.left = null;
//  this.right = null;
//}
//        
//        function BinarySearchTree(){
//  this.root = null;
//}
//
//BinarySearchTree.prototype.push = function(val){
//   var root = this.root;
//
//   if(!root){
//      this.root = new Node(val);
//      return;
//   }
//
//   var currentNode = root;
//   var newNode = new Node(val); 
//
//   while(currentNode){
//      if(val < currentNode.value){
//          if(!currentNode.left){
//             currentNode.left = newNode;
//             break;
//          }
//          else{
//             currentNode = currentNode.left;
//        }
//     }
//     else{
//         if(!currentNode.right){
//            currentNode.right = newNode;
//            break;
//         }
//         else{
//            currentNode = currentNode.right;
//         }
//     }
//  }
//console.log(currentNode);
//}
//        var bst = new BinarySearchTree();
//bst.push("happy");
//bst.push(" rgftrghnwju;lkg tjhgiyuh");
//bst.push(" rehiuyksfj");
//bst.push("ygrgbrjvfj gvfyuh");
//bst.push("happy vfgeglvsb");
//        


var Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    return this;
};

Node.prototype.insert = function(newNode) { 
    if(newNode.value < this.value) {
        if(this.left === null) {
            this.left = newNode;
        } else {
            this.left.insert(newNode);
        }
    } else if(newNode.value > this.value) {
        if(this.right === null) {
            this.right = newNode;
        } else {
            this.right.insert(newNode);
        }
    } else {
        return true;
    }
};


var BinarySearchTree = function(insertNode) {
    if(insertNode instanceof Node) {
        this.root = insertNode;
    } else {
        this.root = new Node(insertNode);
    }
    return this;
};

BinarySearchTree.prototype.insert = function(insert) {  
    if(insert instanceof Node) {
        this.root.insert(insert);
    } else {
        this.root.insert(new Node(insert));
    }
};


BinarySearchTree.prototype.breadthFirstSearch = function(searchValue) {
    console.log("Breadth First Search");

    // For our intensive purposes,
    // our array is acting as a queue for us.
    var queue = [],
        current = this.root;

    if(current !== null) {
        queue.push(current);
    }

    // start off enqueing root
    while(queue.length > 0) {
        var tempNode = queue.shift();
        console.log(tempNode.value); 
        if(tempNode.value==searchValue)
        {
            break;
         }
         
        if(tempNode.left !== null) {
            queue.push(tempNode.left);
        }
         if(tempNode.right !== null) {
            queue.push(tempNode.right);
        }
        
        //console.log(tempNode.value);
    }
            
    console.log("Search is Found ,So I am Exiting the loop at  "+tempNode.value);
};

// Gotta not hurt dat global namespace
(function(){

    // Example BinBinarySearchTree
    var bst = new BinarySearchTree(50);
    bst.insert(25);
    bst.insert(63);
    bst.insert(75);
    bst.insert(12);
    bst.insert(37);
    bst.insert(87);
    bst.insert(63);
    bst.insert(11);
    bst.insert(63);


    bst.breadthFirstSearch(63);
})();

