// very simple hashing function => simple hash table
class HashTable<T> {
    private readonly _prime = 97;
    public keyMap: Array<Array<[string, T]>>;

    public constructor() {
        this.keyMap = new Array<Array<[string, T]>>(this._prime);
    }

    private _hash(key: string): number {
        let total = 0;
        for (const char of key) {
            total += char.charCodeAt(0);
        }
        console.log(total % this._prime);

        return total % this._prime;
    }

    public set(key: string, value: T): this {
        const hash = this._hash(key);
        if (!Array.isArray(this.keyMap[hash])) {
            this.keyMap[hash] = [];
        }
        this.keyMap[hash].push([key, value]);
        return this;
    }

    public get(key: string): T | undefined {
        const hash = this._hash(key);
        const ref = this.keyMap[hash];
        if (Array.isArray(ref)) {
            for (const tuple of ref) {
                if (tuple[0] === key) {
                    return tuple[1];
                }
            }
        }
        return undefined;
    }

    public keys(): string[] {
        const hashKeys: string[] = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (Array.isArray(this.keyMap[i])) {
                hashKeys.push(...this.keyMap[i].map(v => v[0]));
            }
        }
        return hashKeys;
    }

    public values(): T[] {
        return this.keys().map(key => this.get(key));
    }

    public delete(key: string): T | undefined {
        const hash = this._hash(key);
        const ref = this.keyMap[hash];
        if (Array.isArray(ref)) {
            for (let i = 0; i < ref.length; i++) {
                const tuple = ref[i];
                if (tuple[0] === key) {
                    return ref.splice(i, 1)[0][1];
                }
            }
        }
        return undefined;
    }
}

export { HashTable };
