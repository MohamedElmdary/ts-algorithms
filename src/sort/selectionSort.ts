import { swap } from "../utils";

function selectionSort<T>(list: T[]): T[] {
    const result = list.slice();
    const len = result.length;

    for (let a = 0; a < len; a++) {
        let minIndex = a;
        for (let b = a + 1; b < len; b++) {
            if (result[minIndex] > result[b]) {
                minIndex = b;
            }
        }
        if (minIndex != a) {
            swap(result, minIndex, a);
        }
    }

    return result;
}

export { selectionSort };
