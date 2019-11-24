function merge<T>(arr1: T[], arr2: T[]): T[] {
    const result = [];
    let a = 0;
    let b = 0;
    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] >= arr2[b]) {
            result.push(arr2[b++]);
        } else {
            result.push(arr1[a++]);
        }
    }
    return result.concat(b > a ? arr1 : arr2);
}

function mergeSort<T>(list: T[]): T[] {
    if (list.length === 1) {
        return list;
    }
    const mid = Math.floor(list.length / 2);
    const left = mergeSort(list.slice(0, mid));
    const right = mergeSort(list.slice(mid));
    return merge(left, right);
}

export { mergeSort };
