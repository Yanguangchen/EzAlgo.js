console.log("welcome to");
console.log(`
/$$$$$$$$ /$$$$$$$$        /$$$$$$  /$$        /$$$$$$   /$$$$$$ 
| $$_____/|_____ $$        /$$__  $$| $$       /$$__  $$ /$$__  $$
| $$           /$$/       | $$  \\ $$| $$      | $$  \\__/| $$  \\ $$
| $$$$$       /$$/        | $$$$$$$$| $$      | $$ /$$$$| $$  | $$
| $$__/      /$$/         | $$__  $$| $$      | $$|_  $$| $$  | $$
| $$        /$$/          | $$  | $$| $$      | $$  \\ $$| $$  | $$
| $$$$$$$$ /$$$$$$$$      | $$  | $$| $$$$$$$$|  $$$$$$/|  $$$$$$/
|________/|________/      |__/  |__/|________/ \\______/  \\______/ 
`);
console.log("Function List");
console.log(
  "bubbleSort(), quickSort(), mergeSort(), heapSort(), binarySearch(array, target), linearSearch(array, target)"
);
var input = [];
var isArray;

//----------CHECKTYPE FUNCTION: CHECK IF INPUT TYPE IS LIST / ARRAY------//
function checkType(input) {
  // Checks if the user inputs a valid data type
  if (!Array.isArray(input)) {
    throw new Error("ERROR: Input data is not an array!");
  }
  // If input is an array, simply continue execution
}

//---------------------------------------------------//
//          S O R T I N G   A L G O S                //
//---------------------------------------------------//

//------------BUBBLESORT-----------------//
function bubbleSort(arr) {
  try {
    checkType(arr); // Pass `arr` to ensure it's checked
    let n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 1; i < n; i++) {
        // Compare the adjacent positions
        if (arr[i - 1] > arr[i]) {
          // Swap the elements
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          swapped = true;
        }
      }
      // Reduce n because the last element is already in place
      n--;
    } while (swapped);
    return arr;
  } catch (error) {
    console.log(error.message); // Log the error message and stop execution
    return; // Optional: depends on how you want to handle the error case
  }
}
//------------QUICKSORT-----------------//
function quickSort(array) {
  // First, check if the input is an array
  checkType(array);

  // If the array has less than 2 elements, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Select the pivot element, usually the middle one for simplicity
  const pivot = array[Math.floor(array.length / 2)];

  // Elements less than the pivot will be pushed here
  let left = [];
  // Elements greater than the pivot will be pushed here
  let right = [];

  // Partition the array based on the pivot
  for (let i = 0; i < array.length; i++) {
    if (i === Math.floor(array.length / 2)) continue; // Skip the pivot itself
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Recursively apply the same logic to the left and right arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Use the quickSort function and provide the input array
try {
  var sortedArray = quickSort(input);
} catch (error) {
  console.error(error.message);
}

//------------MERGESORT-----------------//
function mergeSort(arr) {
  checkType(arr);
  if (arr.length < 2) return arr;

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return MS(mergeSort(left), mergeSort(right)); // Using MS here
}

function MS(left, right) {
  // Renamed function
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // Concatenating the leftover parts to the result array
  return result.concat(left, right);
}

// Usage example
try {
  var sortedArray = mergeSort(input);
} catch (e) {
  console.error(e.message);
}
//------------HEAPSORT-----------------//
function heapSort(arr) {
  checkType(arr); // Ensuring the input is an array

  let n = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
  return arr;
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // left = 2*i + 1
  let right = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) largest = left;

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) largest = right;

  // If largest is not root
  if (largest != i) {
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

try {
  var input = [1, 4, 3, 5, 6, 7];
  var sortedArray = heapSort(input);
} catch (e) {
  console.error(e.message);
}

//------------SELECTION SORT----------------//

function selectionSort(arr) {
  checkType(arr); // Ensure the input is an array

  let n = arr.length;

  // One by one move boundary of unsorted subarray
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    let min_idx = i;
    for (let j = i + 1; j < n; j++) if (arr[j] < arr[min_idx]) min_idx = j;

    // Swap the found minimum element with the first element
    let temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// Example usage of selectionSort
try {
  var input = [1, 4, 3, 5, 6, 7];
  var sortedArray = selectionSort(input);
} catch (e) {
  console.error(e.message);
}

//---------------------------------------------------//
//          S E A R C H I N G     A L G O S          //
//---------------------------------------------------//

//------------BINARY SEARCH-----------------//

function binarySearch(arr, value) {
  console.log("Make sure array is sorted");
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];

    if (guess === value) {
      return "the target value is at index: " + mid; // Value found
    }
    if (guess > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return "target not found";
}
//------------LINEAR SEARCH-----------------//

function linearSearch(arr, target) {
  checkType(arr); // Ensure the input is an array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return "the index of the target is: " + i; // Return the index of the target element
    }
  }
  return "target not found";
}

var arrayy = [3, 4, 1, 5, 2, 1, 8, 9, 10, 1, 0.1, 0.001];

console.log(selectionSort(arrayy));
