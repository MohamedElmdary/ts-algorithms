import { swap } from '../../index';

class PriorityNode<T> {
    constructor(public value: T, public priority: number) {}
}

// example for => min heap
class PriorityQueue<T> {
    public values: PriorityNode<T>[] = [];

    private bubbleUp(
        index: number,
        parentIndex: number = Math.floor((index - 1) / 2)
    ): void {
        while (
            index &&
            this.values[parentIndex].priority > this.values[index].priority
        ) {
            swap(this.values, index, (index = parentIndex));
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    public enqueue(value: T, priority: number): number {
        const node = new PriorityNode(value, priority);
        const index = this.values.push(node) - 1;
        this.bubbleUp(index);
        return index;
    }

    private bubbleDown(): void {
        let index = 0;
        let left = 1;
        let right = 2;
        while (
            this.values[index]?.priority > this.values[left]?.priority ||
            this.values[index]?.priority > this.values[right]?.priority
        ) {
            const highestPriority =
                this.values[left] && this.values[right]
                    ? this.values[left].priority > this.values[right].priority
                        ? right
                        : left
                    : this.values[left]
                    ? left
                    : right;
            swap(this.values, index, (index = highestPriority));
            left = 2 * index + 1;
            right = 2 * index + 2;
        }
    }

    public dequeue(): PriorityNode<T> | null {
        if (!this.values.length) {
            return null;
        }
        swap(this.values, 0, this.values.length - 1);
        const highestPriority = this.values.pop();
        if (this.values.length === 2) {
            swap(this.values, 0, 1);
        } else if (this.values.length > 2) {
            this.bubbleDown();
        }
        return highestPriority;
    }
}

export { PriorityNode, PriorityQueue };
