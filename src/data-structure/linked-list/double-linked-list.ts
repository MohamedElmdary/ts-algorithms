class DoubleLinkedListNode<T> {
    constructor(
        public value: T,
        public prev: DoubleLinkedListNode<T> = null,
        public next: DoubleLinkedListNode<T> = null
    ) {}
}

class DoublyLinkedList<T> {
    constructor(
        public head: DoubleLinkedListNode<T> = null,
        public tail: DoubleLinkedListNode<T> = null,
        public length: number = 0
    ) {}

    public push(value: T): this {
        if (!this.length++) {
            this.head = this.tail = new DoubleLinkedListNode<T>(value);
        } else {
            const node = new DoubleLinkedListNode<T>(value, this.tail);
            this.tail = this.tail.next = node;
        }
        return this;
    }

    public pop(): DoubleLinkedListNode<T> | null {
        if (!this.length) {
            return null;
        }
        const node = this.tail;
        if (!--this.length) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        return node;
    }

    public shift(): DoubleLinkedListNode<T> | null {
        if (!this.length) {
            return null;
        }
        const node = this.head;
        if (!--this.length) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return node;
    }

    public unshift(value: T): number {
        const node = new DoubleLinkedListNode<T>(value, null, this.head);
        if (!this.length) {
            this.head = this.tail = node;
        } else {
            this.head.prev = node;
            this.head = node;
        }
        return ++this.length;
    }

    public get(index: number): DoubleLinkedListNode<T> | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter: number, current: DoubleLinkedListNode<T>;
        if (index <= this.length / 2) {
            current = this.head;
            counter = -1;
            while (++counter !== index) {
                current = current.next;
            }
        } else {
            counter = this.length - 1;
            current = this.tail;
            while (--counter !== index) {
                current = current.prev;
            }
        }
        return current;
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
        if (!index) {
            this.unshift(value);
        } else if (index === this.length) {
            this.push(value);
        } else {
            const node = this.get(--index);
            const newNode = new DoubleLinkedListNode<T>(value, node, node.next);
            node.next.prev = newNode;
            node.next = newNode;
            this.length++;
        }
        return true;
    }

    public remove(index: number): DoubleLinkedListNode<T> | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (!index) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        }
        --this.length;
        const node = this.get(--index);
        const removedNode = node.next;
        node.next = node.next.next;
        return removedNode;
    }

    public toArray() {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    public print(): void {
        console.log(this.toArray());
    }
}

export { DoubleLinkedListNode, DoublyLinkedList };
