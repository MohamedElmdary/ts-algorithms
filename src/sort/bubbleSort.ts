function bubbleSort<T>(list: T[]): T[] {
    const result = list.slice();
    const len = result.length;

    for (let a = 0; a < len - 1; a++) {
        let noSwap = true; // check if no swaps (in case of already sorted set)
        for (let b = 0; b < len - 1; b++) {
            if (result[b] > result[b + 1]) {
                const temp = result[b];
                result[b] = result[b + 1];
                result[b + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) {
            break;
        }
    }

    return result;
}

export { bubbleSort };
