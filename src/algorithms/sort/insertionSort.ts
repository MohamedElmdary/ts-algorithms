function insertionSort<T>(list: T[]): T[] {
    const result = list.slice();
    const len = result.length;

    for (let a = 1; a < len; a++) {
        let current = result[a];
        let b = a - 1;
        for (; b >= 0 && result[b] > current; b--) {
            result[b + 1] = result[b];
        }
        result[b + 1] = current;
    }

    return result;
}

export { insertionSort };
