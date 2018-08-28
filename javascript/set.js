// class Set {
//   constructor() {
//     this.values = [];
//     this.numberOfValues = 0;
//   }
//
//   add(value) {
//     if(!~this.values.indexOf(value)) {
//       this.values.push(value);
//       this.numberOfValues++;
//     }
//   }
//
//   length() {
//     return this.numberOfValues;
//   }
//
//   print() {
//     console.log(this.values.join(' '));
//   }
// }
function Set() {
  this.values =[];
  this.numberOfValues = 0;
}

Set.prototype.add = function(value) {
  if(!~this.values.indexOf(value)) {
    this.values.push(value);
    this.numberOfValues++;
  }
};
Set.prototype.remove = function(value) {
  var index = this.values.indexOf(value);
  if(~index) {
    this.values.splice(index, 1);
    this.numberOfValues--;
  }
};
Set.prototype.contains = function(value) {
  return this.values.indexOf(value) !== -1;
};
Set.prototype.union = function(set) {
  var newSet = new Set();
  set.values.forEach(function(value) {
    newSet.add(value);
  });
  this.values.forEach(function(value) {
    newSet.add(value)
  });
  return newSet;
};
Set.prototype.intersect = function(set) {
  var newSet = new Set();
  this.values.forEach(function(value) {
    if(set.contains(value)) {
      newSet.add(value);
    }
  });
  return newSet;
};
Set.prototype.difference = function(set) {
  var newSet = new Set();
  this.values.forEach(function(value) {
    if(!set.contains(value)) {
      newSet.add(value);
    }
  });
  return newSet;
};
Set.prototype.isSubset = function(set) {
  return set.values.every(function(value) {
    return this.contains(value);
  }, this);
};
Set.prototype.length = function() {
  return this.numberOfValues;
};
Set.prototype.print = function() {
  console.log(this.values.join(' '));
};


var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.print();
console.log('set contains 1? ', set.contains(1));
set.remove(1);
set.print();
console.log('set contains 1? ', set.contains(1));
var anotherSet = new Set();
anotherSet.add(7);
anotherSet.add(8);
anotherSet.add(9);
anotherSet.add(4);
var unionSet = set.union(anotherSet);
unionSet.print();
