class Set {
  constructor() {
    this.values = [];
    this.numberOfValues = 0;
  }

  add(value) {
    if(!~this.values.indexOf(value)) {
      this.values.push(value);
      this.numberOfValues++;
    }
  }

  remove(value) {
    const index = this.values.indexOf(value);
    if(~index) {
      this.values.splice(index, 1);
      this.numberOfValues--;
    }
  }

  contains(value) {
    return this.values.indexOf(value) !== -1;
  }

  union(set) {
    const newSet = new Set();
    set.values.forEach(value => {
      newSet.add(value);
    });
    this.values.forEach(value => {
      newSet.add(value);
    });
    return newSet;
  }

  intersect(set) {
    const newSet = new Set();
    set.values.forEach(value => {
      if(set.contains(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }

  deifference(set) {
    const newSet = new Set();
    this.values.forEach(value => {
      if(!set.contains(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }

  isSubset(set) {
    return set.values.every(value => {
      return this.contains(value);
    })
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    console.log(this.values.join(' '));
  }
}
// function Set() {
//   this.values =[];
//   this.numberOfValues = 0;
// }
//
// Set.prototype.add = function(value) {
//   if(!~this.values.indexOf(value)) {
//     this.values.push(value);
//     this.numberOfValues++;
//   }
// };
// Set.prototype.remove = function(value) {
//   var index = this.values.indexOf(value);
//   if(~index) {
//     this.values.splice(index, 1);
//     this.numberOfValues--;
//   }
// };
// Set.prototype.contains = function(value) {
//   return this.values.indexOf(value) !== -1;
// };
// Set.prototype.union = function(set) {
//   var newSet = new Set();
//   set.values.forEach(function(value) {
//     newSet.add(value);
//   });
//   this.values.forEach(function(value) {
//     newSet.add(value)
//   });
//   return newSet;
// };
// Set.prototype.intersect = function(set) {
//   var newSet = new Set();
//   this.values.forEach(function(value) {
//     if(set.contains(value)) {
//       newSet.add(value);
//     }
//   });
//   return newSet;
// };
// Set.prototype.difference = function(set) {
//   var newSet = new Set();
//   this.values.forEach(function(value) {
//     if(!set.contains(value)) {
//       newSet.add(value);
//     }
//   });
//   return newSet;
// };
// Set.prototype.isSubset = function(set) {
//   return set.values.every(function(value) {
//     return this.contains(value);
//   }, this);
// };
// Set.prototype.length = function() {
//   return this.numberOfValues;
// };
// Set.prototype.print = function() {
//   console.log(this.values.join(' '));
// };


var set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);
set1.print();
console.log('set1 contains 1? ', set1.contains(1));
set1.remove(1);
set1.print();
console.log('set1 contains 1? ', set1.contains(1));
var set2 = new Set();
set2.add(7);
set2.add(8);
set2.add(9);
set2.add(4);
var set1Set2Union = set1.union(set2);
set1Set2Union.print();
let set3 = new Set();
set3.add(2);
set3.add(3);
set1.print();
set3.print();
console.log('set3 is subset of set1? ',set1.isSubset(set3));
console.log('set1 is subset of set3? ', set3.isSubset(set1));
