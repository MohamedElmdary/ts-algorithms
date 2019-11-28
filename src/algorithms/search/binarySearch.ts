function binarySearch<T>(list: T[], val: T): number {
    let lower = 0;
    let upper = list.length - 1;

    while (upper >= lower) {
        const mid = lower + Math.floor((upper - lower) / 2);
        const midVal = list[mid];

        if (midVal > val) {
            upper = mid - 1;
        } else if (midVal < val) {
            lower = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

export { binarySearch };
