import {
  // linearSearch,
  // binarySearch,
  // bubbleSort,
  // selectionSort,
  // insertionSort,
  // mergeSort,
  // quickSortHelper,
  // radixSort,
  /* =============== */
  SinglyLinkedList
} from '../../src';

// const searchList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log('linearSearch', linearSearch(searchList, 7));
// console.log('binarySearch', binarySearch(searchList, 7));

// const sortList = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// console.log('bubbleSort =======>', bubbleSort(sortList));
// console.log('selectionSort ====>', selectionSort(sortList));
// console.log('insertionSort ====>', insertionSort(sortList));
// console.log('mergeSort ========>', mergeSort(sortList));
// console.log('quickSort ========>', quickSortHelper(sortList));
// console.log('radixSort ========>', radixSort(sortList));

const singleLinkedList = new SinglyLinkedList();
singleLinkedList.push(4).push(5);
singleLinkedList.push(7);
console.log('singleLinkedList\n', singleLinkedList);
