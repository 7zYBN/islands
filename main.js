// //засовывать каждую строку в отдельный массив и сравнивать позиции единиц в этих
// //одномерных массивах. внутри самого одномерного массива смотреть число рядомстоящих
// //единиц. потом в двух соседних массивах сверять позиции столбцов. если есть хоть
// //одно совпадение, то не увеличивать кол-во островов.если отличаются позиции, то 
// //делать +1 остов

let n = prompt("n");
let m = prompt("m");
let islandMap = [];
document.getElementById("container").style['grid-template-columns'] = "repeat(" + n + ", 1fr)";
document.getElementById("container").style['grid-template-row'] = "repeat(" + m + ", 1fr)";
for (let i = 0; i < m; i++) {
    islandMap[i] = [];
    for (var j = 0; j < n; j++) {
        var new_div = document.createElement("div");
        var new_span = document.createElement("span");
        islandMap[i][j] = Math.floor(Math.random() * 2);
        new_span.appendChild(document.createTextNode(islandMap[i][j]));
        new_div.appendChild(new_span);
        if (islandMap[i][j] == 1) {
            new_div.style['background'] = "green";
        } else {
            new_div.style['background'] = "blue";
        }
        document.getElementById("container").appendChild(new_div);
    }
}



/*let islandMap = [
    [0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1]
];*/

/*for (let i = 0; i < 3; i++) {
    islandMap[i] = [];
    for (let j = 0; j < 5; j++) {
        islandMap[i][j] = Math.floor(Math.random() * 2);
    }
}*/

/*let islandMap = [
    [0, 1, 0, 1],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1]
];*/

function search() {
    for (let i = 0; i < partsOfIslands.length; i++) {
        for (let j = 1; j < coordinates.length; j++) {
            if (partsOfIslands[i][0] !== coordinates[j][0]) {
                if (Math.abs(partsOfIslands[i][0] - coordinates[j][0]) === 1) {
                    if (partsOfIslands[i][1] === coordinates[j][1]) {
                        if (partsOfIslands.indexOf(coordinates[j]) === -1) {
                            partsOfIslands.push(coordinates[j]);
                        }
                    }
                }
            } else {
                if (Math.abs(partsOfIslands[i][1] - coordinates[j][1]) === 1) {
                    if (partsOfIslands.indexOf(coordinates[j]) === -1) {
                        partsOfIslands.push(coordinates[j]);
                    }
                }
            }
        }
        //console.log(JSON.stringify(partsOfIslands))
    }
}

let coordinates = [];

for (let i = 0; i < islandMap.length; i++) {
    for (let j = 0; j < islandMap[0].length; j++) {
        if (islandMap[i][j] === 1) {
            coordinates.push([i, j]);
        }
    }
}

console.log('islandMap');
console.log(islandMap);
console.log('coordinates');
console.log(coordinates);


let partsOfIslands = [];
let count_of_islands = 0;



partsOfIslands[0] = coordinates[0];
console.log(JSON.stringify(partsOfIslands))

if (coordinates.length !== 0) {
    count_of_islands = 1;
    search();
}

for (let i = 0; i < coordinates.length; i++) {
    if (partsOfIslands.indexOf(coordinates[i]) === -1) {
        partsOfIslands.push(coordinates[i]);
        count_of_islands++;
        search();
    }
}

alert(count_of_islands);