/**
 * Is there a route between PHX and BKK
 */

// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjacencyList = new Map();

const addNode = (airport) => {
    adjacencyList.set(airport, []);
}

const addEdges = (source, destination) => {
    adjacencyList.get(source).push(destination);
    adjacencyList.get(destination).push(source);
}

airports.forEach(item => {
    addNode(item)
});

routes.forEach(item => addEdges(...item));

console.log(adjacencyList);


const bfs = (start) => {
    const queue = [start];
    const visited = new Set();
    while (queue.length) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);
        for (const des of destinations) {
            if (des === 'BKK') {
                console.log('Found BKK');
                break;
            }
            if (!visited.has(des)) {
                visited.add(des);
                queue.push(des);
                console.log(des);
            }
        }
    }
};

const dfs = (start, visited = new Set()) => {
    visited.add(start);
    const destinations = adjacencyList.get(start);
    for (let des of destinations) {
        if (des === 'BKK') {
            console.log('Found BKK');
            return;
        }
        if (!visited.has(des)) {
            console.log(des);
            dfs(des, visited);
        }
    }
};

console.log('================ BFS ================');
bfs('PHX');

console.log('================ DFS ================');
dfs('PHX');
