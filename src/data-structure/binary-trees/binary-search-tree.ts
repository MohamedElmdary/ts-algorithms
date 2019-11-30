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
}

export { BSTNode, BinarySearchTree };
