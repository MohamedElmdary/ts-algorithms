class Graph {
    public connections: { [key: string]: string[] } = {};

    public addVertex(key: string): this {
        this.connections[key] = this.connections[key] || [];
        return this;
    }

    public addEdge(vtx1: string, vtx2: string): boolean {
        if (this.connections[vtx1] && this.connections[vtx2]) {
            this.connections[vtx1].push(vtx2);
            this.connections[vtx2].push(vtx1);
            return true;
        }
        return false;
    }

    public removeEdge(vtx1: string, vtx2: string): boolean {
        let idx = (this.connections[vtx1] || []).findIndex(v => v === vtx2);
        if (idx !== -1) {
            this.connections[vtx1].splice(idx, 1);
            idx = this.connections[vtx2].findIndex(v => v === vtx1);
            this.connections[vtx2].splice(idx, 1);
            return true;
        }
        return false;
    }

    public removeVertex(vtx: string): boolean {
        if (this.connections[vtx]) {
            this.connections[vtx].forEach(edge => {
                this.removeEdge(vtx, edge);
            });
            delete this.connections[vtx];
            return true;
        }
        return false;
    }

    public dfs(start: string, fn: (value: string) => void): void {
        if (!this.connections[start]) {
            return;
        }
        let passed = new Set<string>();
        const traverse = (vtx: string) => {
            if (passed.has(vtx)) {
                return;
            }
            fn(vtx);
            passed.add(vtx);
            this.connections[vtx].forEach((edge: string) => {
                traverse(edge);
            });
        };
        traverse(start);
    }

    public bfs(start: string, fn: (value: string) => void): void {
        if (!this.connections[start]) {
            return;
        }
        let passed = new Set<string>();
        const stack = [start];
        const maxLength = Object.keys(this.connections).length;
        while (passed.size !== maxLength) {
            let children = new Set<string>();
            let vtx: string;
            while ((vtx = stack.pop())) {
                if (!passed.has(vtx)) {
                    passed.add(vtx);
                    fn(vtx);
                    this.connections[vtx].forEach(v => children.add(v));
                }
            }
            stack.push(...Array.from(children));
        }
    }
}

export { Graph };
