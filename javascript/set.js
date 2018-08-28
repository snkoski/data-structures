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

  length() {
    return this.numberOfValues;
  }

  print() {
    console.log(this.values.join(' '));
  }
}
// function Sett() {
//   this.values =[];
//   this.numberOfValues = 0;
// }
//
// Sett.prototype.add = function(value) {
//   if(!~this.values.indexOf(value)) {
//     this.values.push(value);
//     this.numberOfValues++;
//   }
// };
// Sett.prototype.length = function() {
//   return this.numberOfValues;
// };
// Sett.prototype.print = function() {
//   console.log(this.values.join(' '));
// };
//
//
// var set = new Sett();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.print();
