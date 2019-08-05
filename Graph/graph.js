class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjecentList = {};
    }

    addVertex(node) {
        if(!this.adjecentList[node]) {
            this.adjecentList[node] = [];
            this.numberOfNodes++;
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
            for(let vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + " --> " + connections);
        }
    }

    BFS(node, list) {
        if(this.adjecentList[node]) {
            let queue = [];
            let visited = {};
            queue.push(node);
            while(queue.length > 0) {
                node = queue.shift();
                list.push(node);
                let connectionsList = this.adjecentList[node];
                visited[node] = true;
                for(let i = 0; i < connectionsList.length; i++) {
                    if(!visited[connectionsList[i]]) {
                        queue.push(connectionsList[i]);}
                }
            }
        }
        return list;
    }

    DFS(node, list) {
        if(this.adjecentList[node]) {
            let stack = [];
            let visited = {};
            stack.push(node);
            while(stack.length > 0) {
                node = stack.pop();
                list.push(node);
                let connectionsList = this.adjecentList[node];
                visited[node] = true;
                for(let i = 0; i < connectionsList.length; i++) {
                    if(!visited[connectionsList[i]]) {
                        stack.push(connectionsList[i]);}
                }
            }
        }
        return list;
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('0', '2');
myGraph.addEdge('0', '6');
myGraph.addEdge('0', '1');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('3', '5');
myGraph.showConnections();
console.log('BFS: ');
console.log(myGraph.BFS('0', []));
console.log('DFS: ');
console.log(myGraph.DFS('0', []));