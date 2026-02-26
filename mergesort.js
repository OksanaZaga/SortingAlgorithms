function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr){
  if(arr.length<=1) return arr;
  const mid=Math.floor(arr.length/2);
  const left= mergeSort(arr.slice(0,mid));
  const right= mergeSort(arr.slice(mid));
  return merge(left,right); // Now 'merge' is defined and accessible
}
const arr=[4, 20, 12, 10, 7, 9];
console.log(mergeSort(arr));
mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
//mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
//mergeSort([1, 2, 3]); // [1, 2, 3]
//mergeSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];
   console.log(mergeSort(nums));            