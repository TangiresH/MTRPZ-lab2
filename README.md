# MTRPZ-lab2

## Description
This program offers two different implementations to handle lists.

The first implementation uses built-in arrays to create a list. Built-in arrays offer fast random access to the elements in the list, making it efficient to read and update elements. However, the size of the array is fixed, and it can't be resized dynamically. This means that adding or removing elements from the list may require copying the entire array to a new location, which can be inefficient.

The second implementation is a doubly linked list. Unlike arrays, linked lists don't have a fixed size, and they can grow or shrink dynamically. The advantage of a doubly linked list is that it can be traversed in any direction — both from the beginning to the end and vice versa. This makes it easier to remove or rearrange elements, since the addresses of the list elements whose pointer points to the element to be changed are always known.

In a doubly linked list, each node contains a reference to the previous and next nodes in the list, allowing for bidirectional traversal. This makes it easier to implement certain operations, such as inserting or deleting elements in the middle of the list. However, linked lists have some disadvantages compared to arrays, such as slower random access to elements and higher memory overhead due to the need to store pointers to the nodes.

## Variant of my task
In order to determine the number of my assignment variant, I should divide the number of my scorebook by 4 and determine the remainder of the division.

```
Variant of my task = 1315 % 4 = 3
```

## Prerequisites

- Node.js should be installed in the system.
- npm should be installed in the system.

## Instructions for Using the Code

1. Clone the repository using the command
```
git clone https://github.com/TangiresH/MTRPZ-lab2.git
```
2. Navigate to the directory where the repository was cloned.
3. To start the code execution, enter the command in the terminal:
```
node result.js
```
4. To run the tests, you should type in the terminal:
```
npm run test
```

## Link to the commit in which the CI test found the error

[Failed commit](https://github.com/TangiresH/MTRPZ-lab2/commit/e14cda3dd6613f2a96d92e4df4c435080c46c7eb)

## Conclusion

In my opinion, unit testing is a valuable practice that can significantly improve software development. Unit tests help identify bugs and issues early in the development process, allowing developers to fix them before they become larger problems. By testing each individual component or function, developers can ensure that their code is working as intended and that changes or updates do not break existing functionality.

While unit testing may require an upfront investment of time and effort, the benefits of catching bugs early and improving the overall quality of the codebase make it a worthwhile practice. In conclusion, I believe that unit testing is a useful tool for developers and can ultimately save time and resources in the long run.