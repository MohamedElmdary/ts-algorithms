import { swap } from "../index";

function pivot<T>(list: T[], start: number, end: number): number {
    let moves = start;
    let item = list[start];
    for (let i = start + 1; i <= end; i++) {
        if (item >= list[i]) {
            swap(list, i, ++moves);
        }
    }
    swap(list, start, moves);
    return moves;
}

function quickSort<T>(
    list: T[],
    start: number = 0,
    end: number = list.length - 1
) {
    if (end > start) {
        const pivotIdx = pivot(list, start, end);
        quickSort(list, start, pivotIdx - 1);
        quickSort(list, pivotIdx + 1, end);
    }
    return list;
}

function quickSortHelper<T>(list: T[]) {
    return quickSort([...list]);
}

export { quickSort, quickSortHelper };
