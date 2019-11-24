import {
    linearSearch,
    binarySearch,
    bubbleSort,
    selectionSort
} from "../../src";

const searchList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("linearSearch", linearSearch(searchList, 7));
console.log("binarySearch", binarySearch(searchList, 7));

const sortList = [3, 7, 2, 1, 5, 6, 4, 8, 10, 9];

console.log("bubbleSort", bubbleSort(sortList));
console.log("selectionSort", selectionSort(sortList));
