import { ListNode } from '../linked-list';

class Stack<T> {
    private first: ListNode<T> = null;
    private last: ListNode<T> = null;
    private size: number = 0;

    get length(): number {
        return this.size;
    }

    public push(value: T): number {
        const newNode = new ListNode(value);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    public pop(): T | null {
        if (!this.size) {
            return null;
        }
        const node = this.first;
        --this.size;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = node.next;
        return node.value;
    }
}

export { Stack };
