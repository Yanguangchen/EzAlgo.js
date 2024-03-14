var input = [1, 4, 3, 5, 6, 7];
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
  console.log(bubbleSort(input));