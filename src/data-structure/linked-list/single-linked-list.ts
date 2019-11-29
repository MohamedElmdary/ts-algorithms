import { ListNode } from './node';

class SinglyLinkedList<T> {
    public length = 0;
    public head: ListNode<T> = null;
    public tail: ListNode<T> = null;

    public push(value: T): this {
        this.length++;
        if (!this.head) {
            this.tail = this.head = new ListNode(value);
        } else {
            this.tail = this.tail.next = new ListNode(value);
        }
        return this;
    }

    public pop(): ListNode<T> {
        if (!this.length) {
            return null;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        --this.length;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    public shift(): ListNode<T> {
        if (!this.length) {
            return null;
        }
        const current = this.head;
        this.head = this.head.next;
        --this.length;
        if (!this.length) {
            this.tail = null;
        }
        return current;
    }

    public unshift(value: T): this {
        if (!this.length) {
            this.head = this.tail = new ListNode(value);
        } else {
            const newHead = new ListNode(value);
            newHead.next = this.head;
            this.head = newHead;
        }
        ++this.length;
        return this;
    }

    public get(index: number): ListNode<T> | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let node = this.head;
        while (index--) {
            node = node.next;
        }
        return node;
    }

    public set(index: number, value: T): boolean {
        const node = this.get(index);
        if (node) {
            node.value = value;
        }
        return !!node;
    }

    public insert(index: number, value: T): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.push(value);
        } else if (!index) {
            this.unshift(value);
        } else {
            const node = this.get(--index);
            const newNode = new ListNode(value);
            newNode.next = node.next;
            node.next = newNode;
        }
        this.length++;
        return true;
    }

    public remove(index: number): ListNode<T> | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (!index) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        this.length--;
        const previousNode = this.get(--index);
        const removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        return removedNode;
    }

    public reverse() {
        let node = this.head;
        [this.tail, this.head] = [this.head, this.tail];
        let [next, prev] = [null, null];
        for (let i = 0; i < this.length; i++) {
            [next, node.next] = [node.next, prev];
            [prev, node] = [node, next];
        }
        return this;
    }

    public toArray(): ListNode<T>[] {
        const nodes: ListNode<T>[] = [];
        let node = this.head;
        while (node) {
            nodes.push(node);
            node = node.next;
        }
        return nodes;
    }

    public print(): void {
        console.log(this.toArray());
    }
}

export { SinglyLinkedList };
