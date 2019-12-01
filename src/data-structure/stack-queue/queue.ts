import { ListNode } from '../linked-list';

class Queue<T> {
    private first: ListNode<T> = null;
    private last: ListNode<T> = null;
    private size: number = 0;

    get length(): number {
        return this.size;
    }

    public enqueue(value: T): number {
        const newNode = new ListNode(value);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    public dequeue(): T | null {
        if (!this.size) {
            return null;
        }
        const node = this.first;
        --this.size;
        if (!this.size) {
            this.last = null;
        }
        this.first = this.first.next;
        return node.value;
    }
}

export { Queue };
