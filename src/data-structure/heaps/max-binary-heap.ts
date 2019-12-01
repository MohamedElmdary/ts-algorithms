import { swap } from '../../index';

class MaxBinaryHeap<T> {
    public values: T[] = [];

    private bubbleUp(
        value: T,
        index: number,
        parentIndex: number = Math.floor((index - 1) / 2)
    ): void {
        while (index && this.values[parentIndex] < value) {
            swap(this.values, index, (index = parentIndex));
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    public insert(value: T): number {
        let index = this.values.push(value) - 1;
        this.bubbleUp(value, index);
        return this.values.length;
    }

    private bubbleDown(): void {
        let index = 0;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        while (
            this.values[index] < this.values[left] ||
            this.values[index] < this.values[right]
        ) {
            const maxIndex =
                this.values[left] > this.values[right] ? left : right;
            swap(this.values, index, maxIndex);
            index = maxIndex;
            left = 2 * index + 1;
            right = 2 * index + 2;
        }
    }

    public extractMax(): T | null {
        if (!this.values.length) {
            return null;
        }
        swap(this.values, 0, this.values.length - 1);
        const maxNode = this.values.pop();
        if (this.values.length === 2) {
            swap(this.values, 0, 1);
        } else if (this.values.length > 2) {
            this.bubbleDown();
        }
        return maxNode;
    }
}

export { MaxBinaryHeap };
