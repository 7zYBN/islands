// //засовывать каждую строку в отдельный массив и сравнивать позиции единиц в этих
// //одномерных массивах. внутри самого одномерного массива смотреть число рядомстоящих
// //единиц. потом в двух соседних массивах сверять позиции столбцов. если есть хоть
// //одно совпадение, то не увеличивать кол-во островов.если отличаются позиции, то 
// //делать +1 остов

// var n = prompt("n");
// var m = prompt("m");
// var main_mas = new Array();
// var mas_buff = new Array();
// var mas_buff2 = new Array();
// document.getElementById("container").style['grid-template-columns'] = "repeat(" + n + ", 1fr)";
// document.getElementById("container").style['grid-template-row'] = "repeat(" + m + ", 1fr)";
// for (var i = 0; i < m; i++) {
//     main_mas[i] = new Array();
//     for (var j = 0; j < n; j++) {
//         var new_div = document.createElement("div");
//         var new_span = document.createElement("span");
//         main_mas[i][j] = Math.floor(Math.random() * 2);
//         new_span.appendChild(document.createTextNode(main_mas[i][j]));
//         new_div.appendChild(new_span);
//         /*if (main_mas[j][i] == 1) {
//             new_div.style['background'] = "green";
//         } else {
//             new_div.style['background'] = "blue";
//         }*/
//         document.getElementById("container").appendChild(new_div);
//     }
// }
// console.log(main_mas)
// console.log("-----------")
// console.log(mas_buff)
// console.log("-----------")
// console.log(mas_buff2)
// var islands_count = 0;

// for (var i = 0; i < n; i++) {
//     for (var j = 0; j < m; j++) {
//         mas_buff[i] = main_mas[i][j];
//         mas_buff2[i] = main_mas[i + 1][j];
//         /*if (mas_buff[i] == 1) {
//             console.log("сравниваю " + mas_buff[i] + " и" + mas_buff2[i])
//             if (mas_buff[i] !== mas_buff2[i]) {
//                 islands_count++;
//             }
//         }*/

//         //console.log(mas_buff2[i] + " вторая стр")
//     }
//     console.log(mas_buff + " первая стр")
//     console.log(mas_buff2 + " вторая стр")
// }

// //console.log(islands_count + " островов")

/*let islandMap = [
    [0, 0, 1, 0],
    [1, 0, 1, 1],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0]
];*/

let islandMap = [
    [0, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1]
];

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
let positionsOfIslands = [];
let index = 0;
let count_of_islands = 0;
let est_ebanaya_edinica_ryadom;
let zaebali_peremennie;

let first_line;
let second_line;

/*for (let i = 0; i < islandMap.length - 1; i++) {
    first_line = islandMap.slice(i,i + 1);
    second_line = islandMap.slice(i + 1,i + 2);
    console.log(JSON.stringify(first_line))
    console.log(JSON.stringify(second_line))
    for (let j = 0; j < first_line[0].length; j++) {
        if (j !== first_line[0].length - 1) {
            if ((first_line[0][j] === 1) && (first_line[0][j] !== first_line[0][j + 1])) {
                if (first_line[0][j] !== second_line[0][j]) {
                    count_of_islands++;
                }
            }
        }
        else {

        }
    }
}
console.log(count_of_islands)*/

partsOfIslands[0] = coordinates[0];
console.log(JSON.stringify(partsOfIslands))
if (coordinates.length !== 0) {
    count_of_islands = 1;
    search();
}

function sss(array, current_element) {
    console.log(JSON.stringify(array))
}



function search() {
    for (let i = 0; i < coordinates.length; i++) {
        console.log("i="+ i)
        for (let j = 0; j < coordinates.length; j++) {
            console.log("j="+ j)
            if (coordinates[i][0] !== coordinates[j][0]) {
                console.log("сверяю " +coordinates[i]+" и "+coordinates[j]+"////"+coordinates[i][0]+" не равен "+coordinates[j][0])
                if (Math.abs(coordinates[i][0] - coordinates[j][0]) === 1) {
                    console.log(coordinates[i]+" и "+coordinates[j]+" в разных строках, но рядом")
                    if (coordinates[i][1] === coordinates[j][1]) {
                        console.log("сверяю " +coordinates[i]+" и "+coordinates[j]+"////"+coordinates[i][1]+" равен емае "+coordinates[j][1])
                        for (let k = 0; k < partsOfIslands.length; k++) {
                            if (partsOfIslands[k] === coordinates[i]) {
                                for (let t = 0; t < partsOfIslands.length; t++) {
                                    if (partsOfIslands[t] !== coordinates[j]){
                                        partsOfIslands.push(coordinates[j]);
                                        break;
                                    }
                                }
                                break;
                            }
                            /*else {
                                partsOfIslands.splice(0,partsOfIslands.length);
                            }*/
                        }
                    }
                }
                else {
                    console.log(coordinates[i]+" и "+coordinates[j]+" в разных строках и не рядом")
                    /*count_of_islands++;
                    console.log(count_of_islands)*/
                }
            } else {
                console.log(coordinates[i]+" и "+coordinates[j]+" в одной строке")
                console.log("сверим "+coordinates[i][1]+" и "+coordinates[j][1])
                if (Math.abs(coordinates[i][1] - coordinates[j][1]) === 1) {
                    console.log(coordinates[i][1]+" и "+(coordinates[j][1])+" в одной строке и рядом////")
                    for (let k = 0; k < partsOfIslands.length; k++) {
                        console.log(partsOfIslands[k]+" и "+coordinates[i]+" вqqq одной строке и рядом////")
                        if (partsOfIslands[k] === coordinates[i]) {
                            for (let t = 0; t < partsOfIslands.length; t++) {
                                if (partsOfIslands[t] !== coordinates[j]){
                                    partsOfIslands.push(coordinates[j]);
                                    break;
                                }
                            }
                            break;
                        }
                        /*else {
                            partsOfIslands.splice(0,partsOfIslands.length);
                        }*/
                }
            }
        }
        sss(partsOfIslands, coordinates[i])
        //partsOfIslands.splice(0,partsOfIslands.length);
    }
}

console.log(count_of_islands)
}

//исопльзовать indexOF
//https://learn.javascript.ru/array-methods