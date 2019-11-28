function getDigit(n: number, idx: number): number {
    return Math.abs(Math.floor(n / Math.pow(10, --idx)) % 10);
}

function digitCount(n: number): number {
    return Math.floor(Math.log10(Math.abs(n || 1))) + 1;
}

function mostDigits(nums: number[]): number {
    let maxDigits = 0;
    nums.forEach(num => {
        maxDigits = Math.max(maxDigits, digitCount(num));
    });
    return maxDigits;
}

export { getDigit, digitCount, mostDigits };
