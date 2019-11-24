function bubbleSort<T>(list: T[]): T[] {
    const result = list.slice();
    const len = result.length;

    for (let a = 0; a < len - 1; a++) {
        for (let b = 0; b < len - 1; b++) {
            if (result[b] > result[b + 1]) {
                const temp = result[b];
                result[b] = result[b + 1];
                result[b + 1] = temp;
            }
        }
    }

    return result;
}

export { bubbleSort };
