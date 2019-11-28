function linearSearch<T>(list: T[], val: T): number {
    for (let i = 0, n = list.length; i < n; i++) {
        if (list[i] === val) {
            return i;
        }
    }
    return -1;
}

export { linearSearch };
