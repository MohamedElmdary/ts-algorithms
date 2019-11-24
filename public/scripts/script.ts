import { linearSearch, binarySearch } from "../../src";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("linearSearch", linearSearch(list, 7));
console.log("binarySearch", binarySearch(list, 7));
