import { PriorityQueue } from "../../index";

interface Connection {
    vtx: string;
    weight: number;
}

class WeightedGraph {
    public connections: { [key: string]: Connection[] } = {};

    public addVertex(vtx: string): boolean {
        if (!this.connections[vtx]) {
            this.connections[vtx] = [];
            return true;
        }
        return false;
    }

    public addEdge(vtx1: string, vtx2: string, weight: number): boolean {
        if (this.connections[vtx1] && this.connections[vtx2]) {
            this.connections[vtx1].push({
                vtx: vtx2,
                weight
            });
            this.connections[vtx2].push({
                vtx: vtx1,
                weight
            });
            return true;
        }
        return false;
    }

    public dijkstra(startVtx: string, endVtx: string) {
        if (!(this.connections[startVtx] && this.connections[endVtx])) {
            return;
        }
        const nodes = new PriorityQueue<string>();
        const vtxs = Object.keys(this.connections);
        const previous = vtxs.reduce((p, n) => {
            p[n] = null;
            return p;
        }, {});
        const distances = vtxs.reduce((p, n) => {
            nodes.enqueue(n, n === startVtx ? 0 : Infinity);
            p[n] = n === startVtx ? 0 : Infinity;
            return p;
        }, {});
        /* start traversing =>> */
        let smallest: string;
        while (nodes.values.length) {
            smallest = nodes.dequeue().value;
            if (smallest === endVtx) {
                let result: string[] = [endVtx];
                let node = previous[endVtx];
                while (node) {
                    result.unshift(node);
                    node = previous[node];
                }
                return result;
            }
            if (smallest || distances[smallest] !== Infinity) {
                this.connections[smallest].forEach(edge => {
                    let distance = distances[smallest] + edge.weight;
                    if (distance < distances[edge.vtx]) {
                        distances[edge.vtx] = distance;
                        previous[edge.vtx] = smallest;
                        nodes.enqueue(edge.vtx, distance);
                    }
                });
            }
        }
    }
}

const graph = new WeightedGraph();
["A", "B", "C", "D", "E", "F"].forEach(v => graph.addVertex(v));
const edges: Array<[string, string, number]> = [
    ["A", "B", 4],
    ["A", "C", 2],
    ["B", "E", 3],
    ["C", "F", 4],
    ["F", "E", 1],
    ["D", "E", 3],
    ["D", "F", 1],
    ["C", "D", 2]
];
edges.forEach(([vtx1, vtx2, weight]) => graph.addEdge(vtx1, vtx2, weight));

graph;

const r = graph.dijkstra("A", "E");
r;

export { WeightedGraph };
