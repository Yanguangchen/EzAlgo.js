# Algorithms Utilization Guide

This document provides an overview and usage examples for various algorithms implemented in JavaScript. Included are both sorting and searching algorithms, specifically designed for educational purposes and practical use cases.

## Sorting Algorithms

Below are the sorting algorithms available, along with their descriptions and examples of how to use them.

### quickSort(array)
Sorts an array using the QuickSort algorithm, which employs a divide-and-conquer strategy for efficient sorting.

**Usage Example**:
```javascript
const sortedArray = quickSort([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(sortedArray);

const sortedArray = mergeSort([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(sortedArray);

const sortedArray = heapSort([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(sortedArray);

const sortedArray = selectionSort([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(sortedArray);

const sortedArray = bubbleSort([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(sortedArray);
