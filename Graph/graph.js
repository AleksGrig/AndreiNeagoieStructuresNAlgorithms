class Graph {
    constructor() {
        this.numberOgNodes = 0;
        this.adjecentList = {};
    }

    addVertex(node) {
        if(!this.adjecentList[node]) {
            this.adjecentList[node] = [];
            this.numberOgNodes++;
        }
    }

    addEdge(node1, node2) {
        if(this.adjecentList[node1] && this.adjecentList[node2]) {
            this.adjecentList[node1].push(node2);
            this.adjecentList[node2].push(node1);
        }
    }

    showConnections() {
        const allNodes = Object.keys(this.adjecentList);
        for(let node of allNodes) {
            let nodeConnections = this.adjecentList[node];
            let connections = "";
            let vertex;
            for(vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + " --> " + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addEdge('0', '2');
myGraph.addEdge('0', '1');
myGraph.showConnections();