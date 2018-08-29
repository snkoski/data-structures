function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.numberOfValues++
};
SinglyLinkedList.prototype.remove = function(data) {
  var previous = this.head;
  var current = this.head;
  while(current) {
    if(current.data === data) {
      if(current === this.head) {
        this.head = this.head.next;
      }
      if(current === this.tail) {
        this.tail = previous;
      }
      previous.next = current.next;
      this.numberOfValues--;
    } else {
      previous = current;
    }
    current = current.next;
  }
};
SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;
  while(current) {
    if(current.data === toNodeData) {
      var node = new Node(data);
      if(current === this.tail) {
        this.tail.next = node;
        this.tail = node;
      } else {
        node.next = current.next;
        current.next = node;
      }
      this.numberOfValues++;
    }
    current = current.next;
  }
};
// Traverse allows you to perform actions on all elements of the list
SinglyLinkedList.prototype.traverse = function(fn) {
  var current = this.head;
  while(current) {
    if(fn) {
      fn(current);
    }
    current = current.next;
  }
};
SinglyLinkedList.prototype.length = function() {
  return this.numberOfValues;
};
SinglyLinkedList.prototype.print = function() {
  var string = '';
  var current = this.head;
  while(current) {
    string += current.data + ' ';
    current = current.next;
  }
  console.log(string.trim());
};

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.print();
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(400);
singlyLinkedList.print();
console.log('length of list: ', singlyLinkedList.length());
singlyLinkedList.remove(3);
singlyLinkedList.print();
singlyLinkedList.remove(399);
singlyLinkedList.print();
singlyLinkedList.remove(2);
singlyLinkedList.print();
singlyLinkedList.insertAfter(100, 1);
singlyLinkedList.print();
singlyLinkedList.insertAfter(101, 100);
singlyLinkedList.print();
singlyLinkedList.traverse(function(node) { node.data = node.data + 25; });
singlyLinkedList.print();
