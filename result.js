const DoublyList = require('./index');

const list = new DoublyList();

console.log('Initial list:');
console.log(list);

console.log('Appending elements to the list:');
list.append('one');
list.append('two');
list.append('three');
console.log(list);

console.log('Inserting an element at index 0:');
list.insert('zero', 0);
console.log(list);

console.log('Deleting an element at index 3:');
list.delete(3);
console.log(list);

console.log('Deleting all elements with value "one":');
list.deleteAll('one');
console.log(list);

console.log('Getting an element at index 1:');
console.log(list.get(1)); // "two"

console.log('Cloning the list:');
const clonedList = list.clone();
console.log(clonedList);

console.log('Reversing the list:');
list.reverse();
console.log(list);

console.log('Finding the index of the first occurrence of "two":');
console.log(list.findFirst('two')); // 0

console.log('Finding the index of the last occurrence of "two":');
console.log(list.findLast('two')); // 0

console.log('Clearing the list:');
list.clear();
console.log(list);
