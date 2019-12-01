import { Queue } from '../index';

class BSTNode<T> {
    constructor(
        public value: T,
        public left: BSTNode<T> = null,
        public right: BSTNode<T> = null
    ) {}
}

class BinarySearchTree<T> {
    public root: BSTNode<T> = null;

    public insert(value: T): this {
        const newNode = new BSTNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (current.value === value) {
                    break;
                }
                if (value >= current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        break;
                    }
                    current = current.right;
                } else {
                    if (!current.left) {
                        current.left = newNode;
                        break;
                    }
                    current = current.left;
                }
            }
        }
        return this;
    }

    public find(value: T): boolean {
        let current = this.root;
        while (current) {
            if (current.value === value) {
                return true;
            } else if (value > current.value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return false;
    }

    public bfs(fn: (value: T) => void): void {
        if (!this.root) {
            return;
        }
        const queue = new Queue<BSTNode<T>>();
        queue.enqueue(this.root);
        while (queue.length) {
            const node = queue.dequeue();
            fn(node.value);
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }
    }

    public dfsPreOrder(fn: (value: T) => void): void {
        if (!this.root) {
            return;
        }
        function traverse(node: BSTNode<T>): void {
            fn(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
    }

    public dfsPostOrder(fn: (value: T) => void): void {
        if (!this.root) {
            return;
        }
        function traverse(node: BSTNode<T>): void {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            fn(node.value);
        }
        traverse(this.root);
    }

    public dfsInOrder(fn: (value: T) => void): void {
        if (!this.root) {
            return;
        }
        function traverse(node: BSTNode<T>): void {
            if (node.left) traverse(node.left);
            fn(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
    }
}

const tree = new BinarySearchTree();
tree.insert(10)
    .insert(6)
    .insert(15)
    .insert(3)
    .insert(8)
    .insert(20);

tree.dfsPreOrder(v => {
    v;
});

tree.dfsPostOrder(v => {
    v;
});

tree.dfsInOrder(v => {
    v;
});

tree.bfs(v => {
    console.log(v);
});

console.log(tree);

export { BSTNode, BinarySearchTree };
