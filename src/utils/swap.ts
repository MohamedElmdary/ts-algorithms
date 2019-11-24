function swap<T>(arr: T[], idx1: number, idx2: number): void {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
export { swap };
