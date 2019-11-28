import { mostDigits, getDigit } from "../index";

function radixSort(list: number[]) {
    let result = list.slice();
    let maxIterations = mostDigits(list);

    for (let i = 1; i <= maxIterations; i++) {
        const packet: number[][] = Array.from({ length: 10 }, () => []);
        result.forEach(item => {
            const idx = getDigit(item, i);
            packet[idx].push(item);
        });
        result = [].concat.apply([], packet);
    }
    return result;
}

export { radixSort };
