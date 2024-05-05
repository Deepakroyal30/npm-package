function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

function productOfArray(arr) {
  return arr.reduce((product, num) => product * num, 1);
}

function isArraySorted(arr) {
  return arr.every((num, index) => index === 0 || num >= arr[index - 1]);
}

function removeValueFromArray(arr, value) {
  return arr.filter((num) => num !== value);
}

function calculateDifference(arr) {
  let differences = [];
  for (let i = 1; i < arr.length; i++) {
    differences.push(arr[i] - arr[i - 1]);
  }
  return differences;
}
function countOccurrences(arr, target) {
  let count = 0;
  for (let num of arr) {
    if (num === target) {
      count++;
    }
  }
  return count;
}


module.exports = {
  binarySearch,
  sumOfArray,
  findMax,
  findMin,
  removeDuplicates,
  productOfArray,
  isArraySorted,
  removeValueFromArray,
  calculateDifference,
  countOccurrences
};
